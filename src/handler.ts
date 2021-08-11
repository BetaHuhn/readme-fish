import { Octokit } from 'octokit'
import { HTMLResponse } from '@worker-tools/html'

import renderReadMe from './templates/readme'
import renderHomepage from './templates/homepage'
import renderError from './templates/error'

const maxAge = 60 * 10 // * 10 // Cache expires after 10 minutes
const maxAgeHomepage = 60 * 60 * 24 * 7 // Cache expires after 7 days

declare const GH_PAT: string
const octokit = new Octokit({ auth: GH_PAT })

// eslint-disable-next-line no-undef
export async function handleRequest(event: FetchEvent): Promise<Response> {
	try {

		const request = event.request
		const requestPath = new URL(request.url).pathname.replace(/^\/+/, '')

		const cache = caches.default
		const parts = requestPath.split('/')

		// Render homepage
		if (!requestPath || parts.length !== 2) {
			const cacheKey = `https://readme.fish/homepage.html`
			let res = await cache.match(cacheKey)

			if (!res) {
				const page = renderHomepage()

				res = new HTMLResponse(page)
				res = new Response(res.body, res)

				res.headers.append('Cache-Control', `s-maxage=${ maxAgeHomepage }`)

				event.waitUntil(cache.put(cacheKey, res.clone()))
			}

			return res
		}

		const repo = {
			owner: parts[0],
			name: parts[1]
		}

		const cacheKey = `https://readme.fish/${ repo.owner }/${ repo.name }.html`
		let res = await cache.match(cacheKey)

		const cacheStatus = res ? 'hit' : 'miss'
		console.log(`Cache ${ cacheStatus }`)

		if (!res) {
			const { repository } = await octokit.graphql(`
				query repo($owner: String!, $repo: String!) {
					repository(owner: $owner, name: $repo) {
						name
						nameWithOwner
						description
						openGraphImageUrl
						stargazerCount
						homepageUrl
						url
					}
				}`,
				{
					owner: repo.owner,
					repo: repo.name
				}
			)

			const { data: content } = await octokit.rest.repos.getContent({
				mediaType: {
					format: 'html'
				},
				owner: repo.owner,
				repo: repo.name,
				path: 'README.md'
			})

			const page = renderReadMe({
				title: `${ repository.nameWithOwner } - README.md`,
				description: repository.description,
				image: repository.openGraphImageUrl
			}, content as unknown as string)

			res = new HTMLResponse(page)
			res = new Response(res.body, res)

			res.headers.append('Cache-Control', `s-maxage=${ maxAge }`)
			event.waitUntil(cache.put(cacheKey, res.clone()))
		}

		return res
	} catch (err) {
		if (err && err.data && err.data.repository === null) {
			const page = renderError('Page not found', `This page or repository either doesn't exist or it is set to private.`)
			return new HTMLResponse(page, { status: 404 })
		}

		console.error(err)

		const page = renderError('Unknown Error', `An unknown error ocurred! If this happens again, report it as an issue.`)
		return new HTMLResponse(page, { status: 500 })
	}
}
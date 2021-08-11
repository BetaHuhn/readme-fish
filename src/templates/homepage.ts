/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTML, html } from '@worker-tools/html'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ():HTML => {
	const title = 'ReadMe.fish - Static READMEs'
	const description = 'Blazingly fast statically hosted GitHub READMEs. View a HTML version of any public GitHub repositories README.md file with ReadMe.fish!'
	const image = 'https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/social.png'

	return html`
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>${ title }</title>
	<meta name="title" content="${ title }">
	<meta name="description" content="${ description }">
	
	<link rel="shortcut icon" type="image/x-icon" href="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/favicon.ico">
	<link rel="icon" type="image/png" sizes="32x32" href="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/favicon-16x16.png">
	<link rel="icon" type="image/png" sizes="512x512" href="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/logoBackground.png">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:title" content="${ title }">
	<meta property="og:description" content="${ description }">
	<meta property="og:image" content="${ image }">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:title" content="${ title }">
	<meta property="twitter:description" content="${ description }">
	<meta property="twitter:image" content="${ image }">
</head>

<body>
	<div class="image-wrapper">
		<img src="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/logoBackground.png" alt="ReadMe.fish Logo">
		<h1>ReadMe.fish</h1>
		<p>Blazingly fast statically hosted GitHub READMEs</p>
	</div>
	<div id='content'>
		<div id="file" class="md" data-path="README.md">
			<article class="markdown-body entry-content container-lg" itemprop="text">
			<h1>README.md</h1>
			<p>ReadMe.fish dynamicly generates a blazingly fast static HTML version of any public GitHub repos README.md file and caches it on a CDN using CloudFlare Workers. Simply specify the GitHub repo as the path of this website, similar to how a repo is accessed on GitHub e.g. <code>readme.fish/username/repo</code>.</p>
			<p>Try <a href="/betahuhn/betahuhn">this</a> repo as an example!</p>
			<p>
				<a href="https://github.com/BetaHuhn/readme-fish">Source on GitHub</a>
				 - 
				<a href="https://github.com/BetaHuhn">View Creator</a>
			</p>
			</article>
		</div>
	</div>
	<style type='text/css'>
		body {
			font: 400 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
			color: #dbdbdb;
			background-color: #0b1828;
			-webkit-text-size-adjust: 100%;
			-webkit-font-feature-settings: "kern"1;
			-moz-font-feature-settings: "kern"1;
			-o-font-feature-settings: "kern"1;
			font-feature-settings: "kern"1;
			font-kerning: normal;
			padding: 30px;
		}

		.image-wrapper {
			max-width: 900px;
			margin: auto;
			margin-bottom: auto;
			text-align: center;
			margin-bottom: 5rem;
		}

		.image-wrapper img {
			max-width: 250px;
		}

		.image-wrapper p {
			color: #49cb8a;
			font-weight: 600;
			font-size: 1.1rem;
		}

		@media only screen and (max-width: 600px) {
			body {
				padding: 5px;
			}

			body>#content {
				padding: 0px 20px 20px 20px !important;
			}
		}

		body>#content {
			margin: 0px;
			max-width: 900px;
			border: 1px solid #152b46;
			padding: 10px 40px;
			padding-bottom: 20px;
			border-radius: 10px;
			margin-left: auto;
			margin-right: auto;
		}

		hr {
			color: #bbb;
			background-color: #bbb;
			height: 1px;
			flex: 0 1 auto;
			margin: 1em 0;
			padding: 0;
			border: none;
		}

		.anchor {
			line-height: 1;
			margin-left: -20px;
			padding-right: 4px;
			display: inline;
		}

		.octicon-link {
			vertical-align: middle;
			visibility: hidden;
		}

		.markdown-body h1:hover .anchor .octicon-link, .markdown-body h2:hover .anchor .octicon-link, .markdown-body h3:hover .anchor .octicon-link, .markdown-body h4:hover .anchor .octicon-link, .markdown-body h5:hover .anchor .octicon-link, .markdown-body h6:hover .anchor .octicon-link {
			visibility: visible;
		}

		/**
* Links
*/
		a {
			color: #49cb8a;
			text-decoration: none;
		}

		a:visited {
			color: #49cb8a;
		}

		a:hover {
			color: #49cb8a;
			text-decoration: underline;
		}

		pre {
			background-color: #f6f8fa;
			border-radius: 3px;
			font-size: 85%;
			line-height: 1.45;
			overflow: auto;
			padding: 16px;
		}

		/**
* Code blocks
*/

		code {
			background-color: rgb(21, 43, 70);
			color: #a7cde6;
			border-radius: 3px;
			font-size: 85%;
			margin: 0;
			word-wrap: break-word;
			padding: .2em .4em;
			font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
		}

		pre>code {
			background-color: transparent;
			border: 0;
			display: inline;
			line-height: inherit;
			margin: 0;
			overflow: visible;
			padding: 0;
			word-wrap: normal;
			font-size: 100%;
		}


		/**
* Blockquotes
*/
		blockquote {
			margin-left: 30px;
			margin-top: 0px;
			margin-bottom: 16px;
			border-left-width: 3px;
			padding: 0 1em;
			color: #828282;
			border-left: 4px solid #e8e8e8;
			padding-left: 15px;
			font-size: 18px;
			letter-spacing: -1px;
			font-style: italic;
		}

		blockquote * {
			font-style: normal !important;
			letter-spacing: 0;
			color: #6a737d !important;
		}

		/**
* Tables
*/
		table {
			border-spacing: 2px;
			display: block;
			font-size: 14px;
			overflow: auto;
			width: 100%;
			margin-bottom: 16px;
			border-spacing: 0;
			border-collapse: collapse;
		}

		td {
			padding: 6px 13px;
			border: 1px solid #dfe2e5;
		}

		th {
			font-weight: 600;
			padding: 6px 13px;
			border: 1px solid #dfe2e5;
		}

		tr {
			background-color: #fff;
			border-top: 1px solid #c6cbd1;
		}

		table tr:nth-child(2n) {
			background-color: #f6f8fa;
		}

		/**
* Others
*/

		img {
			max-width: 100%;
		}

		p {
			line-height: 24px;
			font-weight: 400;
			font-size: 16px;
			color: #d6e6f0;
		}

		ul {
			margin-top: 0;
		}

		li {
			color: #d6e6f0;
			font-size: 16px;
			font-weight: 400;
			line-height: 1.5;
		}

		li+li {
			margin-top: 0.25em;
		}

		* {
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
			color: #d6e6f0;
		}

		a:visited {
			color: #49cb8a;
		}

		h1,
		h2,
		h3 {
			border-bottom: 1px solid #152b46;
			padding-bottom: .3em;
			color: #d6e6f0;
			/* Darker */
		}
	</style>
</body>

</html>
`
}
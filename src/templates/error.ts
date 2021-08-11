/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTML, html } from '@worker-tools/html'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (errorTitle: string, message: string):HTML => {
	const title = `${ errorTitle } - ReadMe.fish`
	const description = 'Blazingly fast statically hosted GitHub READMEs. View a HTML version of any public GitHub repositories README.md file.'
	const image = 'https://cdn.mxis.ch/static/banner.png'

	return html`
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>${ title }</title>
	<meta name="title" content="${ title }">
	<meta name="description" content="${ description }">

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
	<div id='content'>
		<div id="file" class="md" data-path="README.md">
			<article class="markdown-body entry-content container-lg" itemprop="text">
			<h1>Whoops! - ${ errorTitle }</h1>
			<p>${ message }</p>
			<p>Make sure you haven't misspelled anything or maybe try a different repository like <a href="/betahuhn/readme-fish">this</a> one!</p>
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
			color: #111;
			background-color: #fdfdfd;
			-webkit-text-size-adjust: 100%;
			-webkit-font-feature-settings: "kern"1;
			-moz-font-feature-settings: "kern"1;
			-o-font-feature-settings: "kern"1;
			font-feature-settings: "kern"1;
			font-kerning: normal;
			padding: 30px;
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
			border: 1px solid #e1e4e8;
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
			color: #0366d6;
			text-decoration: none;
		}

		a:visited {
			color: #0366d6;
		}

		a:hover {
			color: #0366d6;
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
			background-color: rgba(27, 31, 35, .05);
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
			color: #24292e;
		}

		ul {
			margin-top: 0;
		}

		li {
			color: #24292e;
			font-size: 16px;
			font-weight: 400;
			line-height: 1.5;
		}

		li+li {
			margin-top: 0.25em;
		}

		* {
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
			color: #24292e;
		}

		a:visited {
			color: #0366d6;
		}

		h1,
		h2,
		h3 {
			border-bottom: 1px solid #eaecef;
			padding-bottom: .3em;
			color: #111;
			/* Darker */
		}
	</style>
</body>

</html>
`
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTML, html, unsafeHTML } from '@worker-tools/html'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (repo: any, content: string):HTML => html`
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${ repo.title }</title>
    <meta name="title" content="${ repo.title }">
    <meta name="description" content="${ repo.description }">

    <link rel="shortcut icon" type="image/x-icon" href="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/favicon.ico">
	<link rel="icon" type="image/png" sizes="32x32" href="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/favicon-16x16.png">
	<link rel="icon" type="image/png" sizes="512x512" href="https://readme-fish.fra1.cdn.digitaloceanspaces.com/static/logoBackground.png">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${ repo.title }">
    <meta property="og:description" content="${ repo.description }">
    <meta property="og:image" content="${ repo.image }">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${ repo.title }">
    <meta property="twitter:description" content="${ repo.description }">
    <meta property="twitter:image" content="${ repo.image }">
</head>

<body>
    <div class="content">
        <header class="readme-info">
            <p>README.md</p>
            <div class="repo-links">
                <a href="${ repo.url }/stargazers" title="Number of GitHub Stars" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="var(--text-dark)">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span>${ repo.stars }</span>
                </a>
                <a href="${ repo.url }" title="Open GitHub Repo" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--text-dark)">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                ${ repo.homepage ? unsafeHTML(`
                    <a href="${ repo.homepage }" title="Repository homepage" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="var(--text-dark)">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </a>
                `) : '' }
            </div>
        </header>
        <main id='content' class="readme">
            ${ unsafeHTML(content) }
        </main>
        <footer class="readme-info">
            <p>Hosted on <a href="/">ReadMe.fish</a> - README.md by <a href="https://github.com/${ repo.owner }" target="_blank" rel="noopener">@${ repo.owner }</a></p>
        </footer>
    </div>
    <style type='text/css'>
        :root {
            --background: #fdfdfd;
            --background-dark: #f7f7f7;
            --background-code: #f6f8fa;
            --text: #24292e;
            --text-light: #111;
            --text-dark: rgb(110, 129, 153);
            --text-comment: #6a737d;
            --border: #e1e4e8;
            --link: #0366d6;
        }

        [data-theme="dark"] {
            --background: #0b1828;
            --background-dark: rgb(16, 33, 53);
            --background-code: rgb(21, 43, 70);
            --text: #dbdbdb;
            --text-light: #fff;
            --text-dark: rgb(84, 106, 134);
            --text-comment: rgb(146, 159, 174);
            --border: #152b46;
            --link: #49cb8a;
        }

        body {
            font: 400 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: var(--text);
            background-color: var(--background);
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

            .readme {
                padding: 0px 20px 20px 20px !important;
            }
        }

        .content {
            margin: 0px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .readme-info {
            border: 1px solid var(--border);
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            color: var(--text-dark);
        }

        header {
            border-bottom: 0 !important;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        header p {
            color: var(--text-dark);
        }

        footer {
            border-top: 0 !important;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        footer p {
            color: var(--text-dark);
        }

        .readme-info p {
            margin: 0;
            font-weight: 600;
        }

        .repo-links {
            margin-left: auto;
            display: flex;
            align-items: center;
        }

        .repo-links a {
            display: flex;
            align-items: center;
            margin-left: 1rem;
            text-decoration: none;
        }

        .repo-links a:hover {
            text-decoration: none;
        }

        .repo-links svg {
            width: 1rem;
        }

        .repo-links span {
            margin-left: 2px;
            color: var(--text-dark);
        }

        .readme {
            border: 1px solid var(--border);
            border-top-right: 0;
            border-top-left: 0;
            padding: 10px 40px;
            padding-bottom: 20px;
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
            fill: currentColor;
        }

        .markdown-body h1:hover .anchor .octicon-link, .markdown-body h2:hover .anchor .octicon-link, .markdown-body h3:hover .anchor .octicon-link, .markdown-body h4:hover .anchor .octicon-link, .markdown-body h5:hover .anchor .octicon-link, .markdown-body h6:hover .anchor .octicon-link {
            visibility: visible;
        }

        /**
        * Links
        */
        a {
            color: var(--link);
            text-decoration: none;
        }

        a:visited {
            color: var(--link);
        }

        a:hover {
            color: var(--link);
            text-decoration: underline;
        }

        pre {
            background-color: var(--background-code);
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
            background-color: var(--background-code);
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
            border-left: 4px solid var(--background-code);
            padding-left: 15px;
            font-size: 18px;
            letter-spacing: -1px;
            font-style: italic;
        }

        blockquote * {
            font-style: normal !important;
            letter-spacing: 0;
            color: var(--text-comment) !important;
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
            border: 1px solid var(--border);
        }

        th {
            font-weight: 600;
            padding: 6px 13px;
            border: 1px solid var(--border);
        }

        tr {
            background-color: var(--background);
            border-top: 1px solid #c6cbd1;
        }

        table tr:nth-child(2n) {
            background-color: var(--background-dark);
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
            color: var(--text);
        }

        ul {
            margin-top: 0;
        }

        li {
            color: var(--text);
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
        }

        li+li {
            margin-top: 0.25em;
        }

        * {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            color: var(--text);
        }

        a:visited {
            color: var(--link);
        }

        main h1,
        main h2,
        main h3 {
            border-bottom: 1px solid var(--border);
            padding-bottom: .3em;
            color: var(--text-light);
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/drkmd-js/dist/drkmd-js.min.js" data-drkmd-attach></script>
</body>
</html>
`
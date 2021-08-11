<div align="center">
  
# README Fish

[![Node CI](https://github.com/BetaHuhn/cf-worker-starter/workflows/Node%20CI/badge.svg)](https://github.com/BetaHuhn/cf-worker-starter/actions?query=workflow%3A%22Node+CI%22) [![Release CI](https://github.com/BetaHuhn/cf-worker-starter/workflows/Release%20CI/badge.svg)](https://github.com/BetaHuhn/cf-worker-starter/actions?query=workflow%3A%22Release+CI%22) [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/BetaHuhn/cf-worker-starter/blob/master/LICENSE) ![David](https://img.shields.io/david/betahuhn/cf-worker-starter)

View a static version of the README.md from any public GitHub repository.

</div>

## 👋 Introduction

[README Fish](#) dynamicly generates a blazingly fast static HTML version of any public GitHub repos README.md file and caches it on a CDN using CloudFlare Workers. Simply go the [homepage](https://readme.fish) and specify the GitHub repo as the path, similar to how a repo is accessed on GitHub e.g. `readme.fish/username/repo`. Try [this](https://readme.fish/betahuhn/readme-fish) repo as an example!

## 📚 Usage

[README Fish](#) generates a static HTML version of any public GitHub repo and caches it in a fast CDN. This might be useful for a variety of usecases. Maybe you want to quickly view a repos README without the clutter of the GitHub UI. Or you want a fast hosted version of your repos README file/documentation. You could even use it to host your own [mini website](https://readme.fish/betahuhn/betahuhn)!

## 💻 Available commands

- run `yarn lint` or `npm run lint` to run eslint.
- run `yarn test` or `npm run test` to run all Mocha tests.
- run `yarn dev` or `npm run dev` to run the Worker locally with [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/commands#dev).
- run `yarn build` or `npm run build` to produce a production version with webpack.

## ❔ About

This project was developed by me ([@betahuhn](https://github.com/BetaHuhn)) in my free time. If you want to support me:

[![Donate via PayPal](https://img.shields.io/badge/paypal-donate-009cde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=394RTSBEEEFEE)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F81S2RK)

## 📄 License

Copyright 2021 Maximilian Schiller

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# wikidata-pantomime-bot

[![NPM Version](https://img.shields.io/npm/v/wikidata-pantomime-bot.svg)](https://www.npmjs.com/package/wikidata-pantomime-bot)
[![node](https://img.shields.io/node/v/wikidata-pantomime-bot.svg)](https://www.npmjs.com/package/wikidata-pantomime-bot)
[![Build Status](https://travis-ci.com/EdJoPaTo/wikidata-pantomime-bot.svg?branch=master)](https://travis-ci.com/EdJoPaTo/wikidata-pantomime-bot)
[![Dependency Status](https://david-dm.org/EdJoPaTo/wikidata-pantomime-bot/status.svg)](https://david-dm.org/EdJoPaTo/wikidata-pantomime-bot)
[![Dev Dependency Status](https://david-dm.org/EdJoPaTo/wikidata-pantomime-bot/dev-status.svg)](https://david-dm.org/EdJoPaTo/wikidata-pantomime-bot?type=dev)

> This is the starting point I used in my workshop to work with NodeJS and Wikidata

For more information about the event where the workshop took place see [Wikidata Wochenende](https://www.wikidata.org/wiki/Wikidata:Events/Wikidata_Wochenende_Ulm_2020)


## Install

```sh
$ npm install
```


## Start the bot

Write to the @BotFather on Telegram and create your bot.
You will get a token that looks like this: `123:abc`.
Create a file `bot-token.txt` and put it in there.

```sh
$ npm start
```

Take a look at `source/wikidata/index.ts` and tinker around with it.
If you have any questions ask ahead! :)


## Create your own

- Use the template:
	- with Telegram bot: https://github.com/EdJoPaTo/telegram-typescript-bot-template
	- just typescript: https://github.com/EdJoPaTo/typescript-node-module-boilerplate
  - remove things you dont need
- install wikidata-sdk:
  - `npm i wikidata-sdk`
	- include it with: `const wdk = require('wikidata-sdk')`
	- read its docs: https://github.com/maxlath/wikibase-sdk

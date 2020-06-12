import {existsSync, readFileSync} from 'fs';

import {Telegraf} from 'telegraf';

import {getItem} from '../wikidata';

const tokenFilePath = existsSync('/run/secrets') ? '/run/secrets/bot-token.txt' : 'bot-token.txt';
const token = readFileSync(tokenFilePath, 'utf8').trim();
const bot = new Telegraf(token);

bot.command('start', ctx => ctx.reply('Hi there! :)'))

bot.command('item', async context => {
	const item = await getItem();
	return context.reply(item);
});

bot.catch((error: any) => {
	console.error('telegraf error occured', error);
});

export async function start(): Promise<void> {
	// The commands you set here will be shown as /commands like /start or /magic in your telegram client.
	await bot.telegram.setMyCommands([
		{command: 'start', description: 'see the welcome message'},
		{command: 'item', description: 'get item'}
	]);

	await bot.launch();
	console.log(new Date(), 'Bot started as', bot.options.username);
}

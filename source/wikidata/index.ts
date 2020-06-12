import got from 'got'
import randomItem from 'random-item'

const wdk = require('wikidata-sdk')

const GOT_OPTIONS = {headers: {'user-agent': 'EdJoPaTo/wikidata-pantomime-bot'}}

async function downloadJson(url: string): Promise<any> {
	return got(url, GOT_OPTIONS).json()
}

export async function getItem(): Promise<string> {
	return 'TODO'
}

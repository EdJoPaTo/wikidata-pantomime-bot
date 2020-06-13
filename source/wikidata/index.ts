import got from 'got'
import randomItem from 'random-item'
import {/*sparqlQuery,*/ getEntities} from 'wikidata-sdk-got'

const wdk = require('wikidata-sdk')

const GOT_OPTIONS = {headers: {'user-agent': 'EdJoPaTo/wikidata-pantomime-bot'}}

async function downloadJson(url: string): Promise<any> {
	return got(url, GOT_OPTIONS).json()
}

export async function getItem(): Promise<string> {
	const query = `SELECT ?item ?itemLabel ?itemDescription WHERE {
?item wdt:P31 wd:Q337060.
FILTER EXISTS {?item wdt:P18 ?image.}
SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}`
	const url = wdk.sparqlQuery(query)
	const body = await downloadJson(url)

	// const body = await sparqlQuery(query, GOT_OPTIONS)
	const one = randomItem(body.results.bindings) as any
	const itemUrl = one.item.value

	const entityInfos = await getEntities({ids: 'Q1'})
	const universe = entityInfos.Q1.labels!.de.value

	console.log('universe label de', universe)
	return itemUrl
}

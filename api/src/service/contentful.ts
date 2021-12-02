import axios from 'axios';
import {getClient} from './cache';

export const TOKEN = 'Bearer jxL60x3L_5Xi9t-pyThRTqoJ2XXytZaumaRJQvIwrGE';

export const ENDPOINT =
  'https://cdn.contentful.com/spaces/a540ntfc59hv/entries/';
export const ITEM_ENDPOINT = 'https://cdn.contentful.com/spaces/a540ntfc59hv/';

export const metadataId = '721DX3ujLmVAwmiguGLP8t';

export const fetchContent = async (id: string, query?: { key: string, value: string }[]) => {
  const mapQuery = query?.reduce((value, acc) => {
    if(!value) return `${acc.key}=${acc.value}`
    return `${value}&${acc.key}=${acc.value}`;
  }, "") ?? "";
  const cacheKey = `${ENDPOINT}${id}?${mapQuery}`
  const client = await getClient();
  const cached = await client.get(id)
  if(cached) return JSON.parse(cached)
  const payload = await axios.get(cacheKey, { headers: { Authorization: TOKEN } });
  await client.set(cacheKey, JSON.stringify(payload.data));
  return payload.data;
}

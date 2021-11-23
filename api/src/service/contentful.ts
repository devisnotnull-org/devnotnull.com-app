import axios from 'axios';
import {getClient} from './cache';

export const TOKEN = 'Bearer jxL60x3L_5Xi9t-pyThRTqoJ2XXytZaumaRJQvIwrGE';

export const ENDPOINT =
  'https://cdn.contentful.com/spaces/a540ntfc59hv/entries/';
export const ITEM_ENDPOINT = 'https://cdn.contentful.com/spaces/a540ntfc59hv/';

export const metadataId = '721DX3ujLmVAwmiguGLP8t';

export const fetchContent = async (id: string) => {
    const client = await getClient();
    const cached = await client.get(id)
    if(cached) {
        console.log("cached")
        return JSON.parse(cached)
    };
    const payload = await axios.get(`${ENDPOINT}${id}`, { headers: { Authorization: TOKEN } });
    await client.set(id, JSON.stringify(payload.data));
    return payload.data;
}

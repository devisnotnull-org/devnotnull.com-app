import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from "../constants"

export const fetchMetadata = (id: string) => axios.get(`${ENDPOINT}${id}`,  { headers: { Authorization: TOKEN } });

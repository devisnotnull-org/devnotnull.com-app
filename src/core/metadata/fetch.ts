import axios from 'axios';

import { ENDPOINT, TOKEN } from "../constants"

export const fetchMetadata = (id: string) => axios.get(`${ENDPOINT}${id}`,  { headers: { Authorization: TOKEN } });

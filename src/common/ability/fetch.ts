import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from "../constants"

export const fetchAbilities = () => axios.get(`${ENDPOINT}${CONTENT_TYPE.abilitiesItem}&select=fields`,  { headers: { Authorization: TOKEN } });

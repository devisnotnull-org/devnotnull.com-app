import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from "../constants"

export const fetchFolio = () => axios.get(`${ENDPOINT}${CONTENT_TYPE.portfolioItem}&select=fields`,  { headers: { Authorization: TOKEN } });

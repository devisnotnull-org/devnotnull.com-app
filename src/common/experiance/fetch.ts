import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from "../constants"

export const fetchExperiance = () => axios.get(`${ENDPOINT}${CONTENT_TYPE.experienceItem}&select=fields`,  { headers: { Authorization: TOKEN } });

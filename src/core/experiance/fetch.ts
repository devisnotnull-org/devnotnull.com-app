import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from "../constants"

const select = 'fields';
const order = '-fields.startDate';

export const fetchExperiance = () => axios.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.experienceItem}&select=${select}&order=${order}`,  { headers: { Authorization: TOKEN } });

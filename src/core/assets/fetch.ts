import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from "../constants"

const select = 'fields';
const order = '-fields.level';

export const fetchAbilities = () => axios.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.abilitiesItem}&select=${select}&order=${order}`,  { headers: { Authorization: TOKEN } });
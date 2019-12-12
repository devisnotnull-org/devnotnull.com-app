import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from "../constants"

export const fetchContact = () => axios.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.contactItem}&select=fields`,  { headers: { Authorization: TOKEN } });

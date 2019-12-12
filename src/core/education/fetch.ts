import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from "../constants"

export const fetchEducation = () => axios.get(`${ENDPOINT}?content_type=${CONTENT_TYPE.educationItem}&select=fields`,  { headers: { Authorization: TOKEN } });

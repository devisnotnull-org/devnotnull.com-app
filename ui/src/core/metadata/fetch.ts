import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchMetadata = () => axios.get(`${ENDPOINT}/meta`);

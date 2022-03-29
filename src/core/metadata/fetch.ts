import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchMetadata = () => {
    return axios.get(`${ENDPOINT}/meta`);
}

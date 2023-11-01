import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchTags = () => axios.get(`${ENDPOINT}/blog/tags`);

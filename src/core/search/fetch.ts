import axios from 'axios';

import { ENDPOINT } from '../constants';

export const searchBlog = (tag: string) => axios.get(`${ENDPOINT}/blog/search/${tag}`);

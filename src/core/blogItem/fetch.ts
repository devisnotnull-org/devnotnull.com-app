import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchBlogItem = (slug: string) => axios.get(`${ENDPOINT}/blog/slug/${slug}`);

import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchBlog = () => axios.get(`${ENDPOINT}/blog?limit=10`);

export const fetchTaggedBlog = (tag: string) => axios.get(`${ENDPOINT}/blog/tags/${tag}?limit=10`);

export const fetchBlogEntry = (id: string) => axios.get(`${ENDPOINT}/blog/${id}`);

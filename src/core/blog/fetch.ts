import axios from 'axios';

import { ENDPOINT } from '../constants';
import {
  CommonContentPayload,
  CommonContentListPayload,
} from '../../models/common';
import { Blog } from '../../models/blog';

export const fetchBlog = () =>
  axios.get<CommonContentListPayload<Blog>>(`${ENDPOINT}/blog?limit=10`);

export const fetchTaggedBlog = (tag: string) =>
  axios.get<CommonContentListPayload<Blog>>(
    `${ENDPOINT}/blog/tags/${tag}?limit=10`
  );

export const fetchBlogEntry = (id: string) =>
  axios.get<CommonContentPayload<Blog>>(`${ENDPOINT}/blog/${id}`);

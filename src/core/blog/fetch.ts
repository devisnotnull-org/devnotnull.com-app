import axios from 'axios';

import { ENDPOINT, TOKEN, CONTENT_TYPE } from '../constants';

export const fetchBlog = () =>
  axios.get(
    `${ENDPOINT}?content_type=${CONTENT_TYPE.blogItem}&select=fields&`,
    { headers: { Authorization: TOKEN } }
  );

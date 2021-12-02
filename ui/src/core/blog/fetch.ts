import axios from 'axios';

import { ENDPOINT  } from '../constants';

export const fetchBlog = () =>
  axios.get(
    `${ENDPOINT}/blog`,
  );

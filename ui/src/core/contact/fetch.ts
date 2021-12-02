import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchContact = () =>
  axios.get(
    `${ENDPOINT}/contact`,
  );

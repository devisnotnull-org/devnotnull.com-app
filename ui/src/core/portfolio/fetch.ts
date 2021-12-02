import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchFolio = () =>
  axios.get(
    `${ENDPOINT}/folio`,
  );

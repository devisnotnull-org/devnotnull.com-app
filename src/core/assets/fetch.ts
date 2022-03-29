import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchAbilities = () => axios.get(`${ENDPOINT}/abilities`);

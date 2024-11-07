import axios from 'axios';

import { ENDPOINT } from '../constants';

export const fetchExperiance = () => axios.get(`${ENDPOINT}/experiance`);

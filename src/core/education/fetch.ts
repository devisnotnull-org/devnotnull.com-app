import axios from "axios";

import { ENDPOINT } from "../constants";

export const fetchEducation = () => axios.get(`${ENDPOINT}/education`);

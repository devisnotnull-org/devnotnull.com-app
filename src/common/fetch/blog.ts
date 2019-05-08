import axios from 'axios';

const API_ROOT = 'https://api.fandanzle.co.uk/';

export const fetchPosts = () => axios.get(`${API_ROOT}posts/`);

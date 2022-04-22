import axios from 'axios';
const API = axios.create({ baseURL: 'https://smoothcommerce.tech' });
export const fetchBusinesses = () => {
   return API.get('/api.json');
};
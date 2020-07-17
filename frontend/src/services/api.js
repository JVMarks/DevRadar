import axios from 'axios';

const api = axios.create({
 baseURL:'http://localhost:4343'
});

export default api;
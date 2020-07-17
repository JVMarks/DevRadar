import axios from 'axios';

const api = axios.create({
 baseURL: 'http://192.168.56.1:4343',
});

//para o android 10.0.2.2
export default api;
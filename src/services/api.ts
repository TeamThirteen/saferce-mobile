import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:3333'
    : 'https://saferce-backend.herokuapp.com/';

const api = axios.create({
  baseURL,
});

export default api;

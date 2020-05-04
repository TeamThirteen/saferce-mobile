import axios from 'axios';

const baseURL = 'https://saferce-backend.herokuapp.com/';

const api = axios.create({
  baseURL,
});

export default api;

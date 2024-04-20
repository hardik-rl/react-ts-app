import axios from "axios";

const backendUrl = 'http://localhost:8081';

const api = axios.create({
  baseURL: backendUrl,
});

export default api;
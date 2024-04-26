import axios from 'axios';
import { getStore } from '../utils/localstorage';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data,application/www-form-urlencoded",
  }
});

function getAccessToken() {
  const token = getStore('accessToken');
  if (token) {
    instance.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
}

export { instance, getAccessToken };

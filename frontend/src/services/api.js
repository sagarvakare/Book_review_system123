import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Automatically include token in every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getBooks = () => API.get('/books');
export const getBookById = (id) => API.get(`/books/${id}`);
export const postReview = (data) => API.post('/reviews', data);
export const getUserById = (id) => API.get(`/users/${id}`);

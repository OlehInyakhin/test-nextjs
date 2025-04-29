import axios from 'axios';

// Create an Axios instance with custom config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60 * 1000, // 60 seconds
});

// Request interceptor for adding auth token, etc.
api.interceptors.request.use(
  config => {
    // You can add auth tokens here
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle specific error status codes
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        // Handle unauthorized access
        // e.g., redirect to login page
        console.log('Unauthorized access');
      } else if (error.response.status === 404) {
        // Handle not found
        console.log('Resource not found');
      } else if (error.response.status >= 500) {
        // Handle server errors
        console.log('Server error');
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Network error');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;

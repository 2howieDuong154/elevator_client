import axios from 'axios';

// Create an Axios instance with the base URL and default headers for all project.
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
});
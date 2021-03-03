/* eslint-disable no-underscore-dangle */
import { dispatchEvent } from '@shared/utils';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add a response interceptor
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // interceptor to refresh token
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest.url.includes('/auth/oauth/token')
    ) {
      dispatchEvent('@PLATAFORMA_LOGOUT');

      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !error.config._retry) {
      originalRequest._retry = true;

      const refresh_token = localStorage.getItem('@plataforma:refresh_token');

      return api
        .post(
          `/auth/oauth/token?grant_type=refresh_token&refresh_token=${refresh_token}`,
          null,
          {
            headers: {
              authorization: `Basic ${process.env.REACT_APP_CLIENT_SECRET}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        )
        .then(res => {
          dispatchEvent('@PLATAFORMA_UPDATE_TOKEN', {
            access_token: res.data.access_token,
            refresh_token: res.data.refresh_token,
          });

          originalRequest.headers.authorization = `Bearer ${res.data.access_token}`;

          return api.request(originalRequest);
        });
    }

    //  define error message
    const originalMessage = error.message;

    Object.defineProperty(error, 'data', {
      get() {
        if (!error.response) {
          return originalMessage;
        }
        return error.response.data;
      },
    });

    return Promise.reject(error);
  },
);

export default api;

/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';

let apiBaseUrl = 'http://localhost:5001';

// getApiBaseUrl()

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

export default {
  // called when the user attempts to log in
  login: async ({ email, password }) => {
    const postData = {
      email: email,
      password: password,
    };

    return axios
      .post(`${apiBaseUrl}/auth/login`, postData, axiosConfig)
      .then((res) => {
        const serverResponse = res.data;
        console.log('Response', serverResponse);
        if (serverResponse) {
          const accessToken = serverResponse.token;
          //  const refreshToken = serverResponse.data.refreshToken;

          localStorage.setItem('token', accessToken);
          // localStorage.setItem('refreshToken', refreshToken);

          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        return err.message;
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

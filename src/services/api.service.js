import axios from "axios"

export default {
  install: function () {
    this.axios = axios.create({
      baseURL: `${process.env.VUE_APP_API_URL}` ? `${process.env.VUE_APP_API_URL}` : 'http://localhost:3000/api/v1',
      timeout: 1000
    });

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      // Do something with response data
      return response;
    }, function (error) {
      // Do something with response error
      return Promise.reject(error);
    });
  },

  doPost: function (url, data) {

    const token = localStorage.getItem('access_token');
    return this.axios.post(url, data, {
      headers: { 'Authorization': `Basic ${token}` }
    })
  },
  doGet: function (url, data) {
    const token = localStorage.getItem('access_token');
    return this.axios.get(url, {
      headers: { 'Authorization': `Basic ${token}` },
      params: data
    })
  },

  doLogin: function (data) {
    return this.doPost('/users/loginByApi', data);
  },
}
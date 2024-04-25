import axios, { Axios, AxiosResponse } from 'axios';

import { HttpResponse, ServiceError } from '@/definition/common/Http.d';
import { HTTP_OK } from '@/constants/error';

const httpClient = (() => {
  const curClient = new Axios();
  curClient.defaults = { ...axios.defaults };

  curClient.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => {
      if (response.data.code != HTTP_OK) {
        // TODO: error case. need to handle error
        throw new ServiceError(response.data.code, response.data.data);
      }

      return response.data.data;
    },
    (err) => {
      // TODO: global error handling
      console.log('http client err : ', err);
    },
  );

  return curClient;
})();

const authHttpClient = (() => {
  const curClient = new Axios();
  curClient.defaults = { ...axios.defaults };

  curClient.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => {
      if (response.data.code != HTTP_OK) {
        // error case
        throw new ServiceError(response.data.code, response.data.data);
      }

      return response.data.data;
    },
    (err) => {
      // TODO: global error handling
      console.error('axios HTTP request error : ', err);
      throw err;
    },
  );

  return curClient;
})();

export const addTokenToHeader = (token: string) => {
  if (token) {
    authHttpClient.interceptors.request.use(
      (config) => {
        if (config.headers != undefined) {
          config.headers['x-user-auth-token'] = token;
        }
        return config;
      },
      (err) => {
        console.log('http client err : ', err);
        return Promise.reject(err);
      },
    );
  }
};

export { httpClient, authHttpClient };

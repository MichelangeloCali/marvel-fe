import { md5 } from 'js-md5';

import {
  API_BASE_URL,
  MARVEL_PRIVATE_KEY,
  MARVEL_PUBLIC_KEY,
} from '@/configs/enviroments';
import { axios } from '@/libs/axios';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const ts = new Date().getTime().toString();
    const hash = md5(`${ts}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`);

    config.params = {
      ...config.params,
      ts,
      apikey: MARVEL_PUBLIC_KEY,
      hash,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

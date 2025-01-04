import { API_BASE_URL } from '@/configs/enviroments';
import { axios } from '@/libs/axios';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

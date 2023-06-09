import axios from 'axios';
import { IFormInput } from './interfaces and schemas/interfaces';

export const api = axios.create({
  baseURL: 'http://localhost:3000', // replace this with your API base URL
});

export const registerUser = (userData: IFormInput) => {
    return api.post('/users', userData);
  };

export const loginUser = (loginData: IFormInput) => {
    return api.post('/auth', loginData)
}

  
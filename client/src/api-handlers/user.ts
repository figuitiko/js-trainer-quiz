
import axios from 'axios';
import { IUser } from '../reducers/user';

export const handleUserLogin = async (user: IUser) => {
  const baseUrl = import.meta.env.VITE_BASE_URL_API;

  const { data } = await axios.post(`${baseUrl}/api/users/login`, user,
  {
    headers: {'Content-Type': 'application/json'}
  }
  );
  return data;
};
export const handleUserSignUp = async (user: IUser) => {
  const baseUrl = import.meta.env.VITE_BASE_URL_API;
  const { data } = await axios.post(`${baseUrl}/api/users/signup`, user, {
    headers: {'Content-Type': 'application/json'}
  });
  return data;
};
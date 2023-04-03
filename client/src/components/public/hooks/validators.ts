import { IUserRegister } from './useForm';
import { IUser } from "../../../reducers/user";

const validators =(user: IUser | IUserRegister) => {
  let isInvalidName = false;
  let isInValidEmail = false;
  let isInValidPassword = false;
  let isInValidRepeatPassword = false;
  const { name, email, password } = user;
  isInValidPassword = (!!password && password.length < 6);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isInValidEmail = (!!email && !emailRegex.test(email));      
  isInvalidName = (!!name && name.length < 3);
  if('repeatPassword' in user){
    const { repeatPassword } = user;
    isInValidRepeatPassword = (password !== repeatPassword);
  }
  
  
  return {
    isInvalidName,
    isInValidEmail,
    isInValidPassword,
    isInValidRepeatPassword
  }
}

export default validators;
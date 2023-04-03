import { userInitialState } from './../../../reducers/user'
import { handleUserLogin, handleUserSignUp } from './../../../api-handlers/user'
import { useMutation,  } from '@tanstack/react-query'
import {useEffect, useReducer} from 'react'
import useAuth from '../../../hooks/useAuth'
import { IUser } from '../../../reducers/user'
import validators from './validators'
import {toast } from 'react-toastify'

export interface IUserRegister extends IUser {
  repeatPassword?: string; 
  isInValidEmail?: boolean;
  isInvalidName?: boolean;
  isInValidPassword?: boolean;
  isInValidRepeatPassword?: boolean;
}
export interface IUserLogin extends IUser {  
  isInValidEmail?: boolean;
  isInValidPassword?: boolean;
}
export type FormState = IUserRegister | IUserLogin;
type propHandleTab = ((tab: number) => void ) | undefined;

const useForm = (userInitialState: FormState ,handleTab: propHandleTab) => {
  const {signUp, login, user} = useAuth();
  const {email} = user;
  
  
  const timers: NodeJS.Timeout[]  = [];
  useEffect(() => {   
    return () => {
      if(timers.length > 0){
        timers.forEach((timer) => clearTimeout(timer));
      }
    }
  }, [email]);
  const userMutationRegister = useMutation((user: IUser) => handleUserSignUp(user),{
    onSuccess: (data) => {
      
       if(data?.user){
        
      const timerVal =  setTimeout(() => {
          toast.success('User created successfully');
          setTimeout(() => {
            if(handleTab){
              handleTab(0);
            }
          }, 2000);
        }, 400);
        timers.push(timerVal);
       }else{
        const timerVal = setTimeout(() => {
           toast.error(data?.user?.error
          );
        }, 400);
        timers.push(timerVal);
       
       }
    },
    onError: (error) => {
      toast.error('Error creating user');
    }
  });

  const userMutationLogin = useMutation((user: IUser) => handleUserLogin(user),{
    onSuccess: (data) => {      
      if(data?.user){
        login({...data?.user, token: data?.token});
        updateForm({email: '', password: ''});        
      }else{
        const timerVal = setTimeout(() => {
          toast.error(data?.user?.error
         );
       }, 400);
       timers.push(timerVal);
      }
    },
  })

  const [form, updateForm] = useReducer(({...state}, {...newState}) => {
  
    let stateResult = {...state, ...newState};  
    
      if('repeatPassword' in userInitialState ){        
        const { 
          isInvalidName,
         isInValidEmail,
         isInValidPassword,
         isInValidRepeatPassword}  = validators(stateResult);
         stateResult = {...stateResult, isInvalidName, isInValidEmail, isInValidPassword, isInValidRepeatPassword}; 
      }else{
        const { isInValidEmail,
          isInValidPassword}  = validators(stateResult);
          stateResult = {...stateResult, isInValidEmail, isInValidPassword};
      }

    return stateResult;
  }, {
    userInitialState  
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {name, email, password} = form;
    userMutationRegister.mutate({name, email, password});
    if(userMutationRegister.isSuccess){
      signUp({name, email, password});
    }else{
      console.log('error');
    }    
  }
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {email, password} = form;
    userMutationLogin.mutate({email, password});    
  }

  return {form, updateForm, handleSubmit, handleLogin}
}

export default useForm
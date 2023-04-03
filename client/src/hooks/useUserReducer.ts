import { IUser, userInitialState, userReducer } from './../reducers/user';
import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom'


const useUserReducer = () => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  const navigate = useNavigate();
  

  const login = (user: IUser) => {    
    dispatch({ type: "LOGIN", payload: user });
    navigate('/');
  };
  const signUp = (user: IUser) => {
    dispatch({ type: "SIGNUP", payload: user });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: null});
    navigate('/login');
  };

  return { state, login, logout, signUp };
};

export default useUserReducer;
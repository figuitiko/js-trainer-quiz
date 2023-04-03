
export const USER_ACTIONS_TYPES = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
  LOGOUT: 'LOGOUT',
};
export interface IUser {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
}

export const userInitialState:IUser =  JSON.parse(localStorage.getItem('user') || '{}');

export  const updateLocalStorage = (user:IUser | {}) => {
  window.localStorage.setItem('user', JSON.stringify(user));
};



const UPDATE_STATE_BY_ACTION = {
  [USER_ACTIONS_TYPES.LOGIN]: (state:IUser, payload: IUser | null) => {
    if(!payload) return state;
    updateLocalStorage(payload);
    return {...state, ...payload};
  },
  [USER_ACTIONS_TYPES.SIGNUP]: (state:IUser) => {   
    return {...state};
  },
  [USER_ACTIONS_TYPES.LOGOUT]: (state:IUser) => { 
    let newState = {};   
    updateLocalStorage({} );
    return {...newState};
  },
};


export const userReducer = (state:IUser, action: { type: string; payload: IUser | null }) => {
  const { type, payload } = action;
  const updateState = UPDATE_STATE_BY_ACTION[type];
  if(updateState && payload){
    return   updateState(state, payload)
  }else if(updateState && !payload){    
    return updateState(state, null );
  }else{
    return state;
  }  
}
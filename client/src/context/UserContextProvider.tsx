
import React from 'react'
import useUserReducer from '../hooks/useUserReducer'
import { UserContext } from './UserContext'
interface Props{
  children: React.ReactNode
}

const UserContextProvider = ({children}:Props) => {
  const {state, login, logout, signUp} = useUserReducer(); 
  return (
    <UserContext.Provider value={{
      user: state,
      login,
      logout,
      signUp
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
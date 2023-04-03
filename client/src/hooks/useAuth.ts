import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const useAuth = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default useAuth
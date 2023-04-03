import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


interface Props{
  children: React.ReactNode
}

const ProtectedRoute = ({children}: Props) => {
  
  const {user} =useAuth(); 
  
  if(!Object.keys(user).length  ) {    
    return <Navigate to="/login" />
  }
  
  
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
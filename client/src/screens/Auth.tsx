import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import FormSignUp from '../components/public/FormSignUp';
import { useState } from 'react';
import FormLogin from '../components/public/FormLogin';

const Auth = () => {
  const {user} = useAuth();     
  if(Object.keys(user).length > 0){
    return (<Navigate to={'/'} replace />)
  }
  const [tab, setTab] = useState(0);

  return (
    <div className='flex items-center justify-center flex-col gap-4 h-screen'>
      <div className='tabs tabs-boxed gap-4 '>
        <a className={`tab ${tab==0 && 'tab-active'}`} onClick={()=>setTab(0)}>Login</a>
        <a className={`tab ${tab==1 && 'tab-active'}`} onClick={()=>setTab(1)}>Sign Up</a>        
      </div>
      <div className='flex min-w-[200px] min-h-[200px] w-[300px] h-[400px] justify-center '>
        {
          tab === 0 
          ?
          <FormLogin  />
          :  
           <FormSignUp handleTab={setTab} />        
        }

      </div>
    </div>
  )
}

export default Auth
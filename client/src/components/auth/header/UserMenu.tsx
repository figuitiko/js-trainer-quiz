import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const UserMenu = () => {
  const { logout } = useAuth()   
  
 
  return (
    <nav className='absolute border-2 p-2 ml-[-30px] mt-[10px] bg-white'>
      <ul className="flex flex-col gap-2 ml-[0]">
        <li className="text-sm font-semibold">          
          <Link to="/profile" >Profile</Link>
        </li>
        <li className="text-sm font-semibold">
          <Link to="/" >tests</Link>
        </li>
        <li className="text-sm font-semibold  cursor-pointer" onClick={logout} >Logout</li>
      </ul>
    </nav>
  )
}

export default UserMenu
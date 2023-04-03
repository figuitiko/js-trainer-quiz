import Avatar from 'react-avatar';
import {useEffect, useReducer, useState} from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import UserMenu from './UserMenu';
import { IUser } from '../../../reducers/user';
import useAuth from '../../../hooks/useAuth';
interface IState {
  isVisible: boolean;  
}

const userFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : {}; 
const UserInfo = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const {name} = userFromStorage;
  
  
  return (
    <div className="ml-auto flex gap-4 justify-center items-center">
      
        <Avatar name="Foo Bar"  size='40' round={true} />
      
      <div >
        <p className="text-sm font-semibold">{name}</p>
      </div>
      <div className="ml-2">
       <div className="text-sm pointer ">
        {
          isVisibleMenu ? 
          <FiChevronUp className='cursor-pointer'  onClick={()=>setIsVisibleMenu(!isVisibleMenu)}/>
          : 
          <FiChevronDown className='cursor-pointer' onClick={()=>setIsVisibleMenu(!isVisibleMenu)}/>
        }
         
          {
            isVisibleMenu && <UserMenu />
          }          
        </div>
      </div>
    </div>
  )
}

export default UserInfo
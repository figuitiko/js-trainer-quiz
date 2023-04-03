import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className='bg-[#F5F7FB]'>
      <Outlet />
    </div>
  )
}

export default Main
import {Route, Routes} from 'react-router-dom';
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import ProtectedRoute from './ProtectedRoute';
import Profile from '../screens/Profile';
import Tests from '../screens/Tests';



const TheRouterProvider = () => {
  return (
    <Routes>
      <Route path='/login' element={<Auth />} />
      <Route path='/' element={
        <ProtectedRoute > 
            <Home />
        </ProtectedRoute>
      } >
          <Route path ='/' element={<Tests />} />
          <Route path ='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default TheRouterProvider
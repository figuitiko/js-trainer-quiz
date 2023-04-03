import useForm from "./hooks/useForm";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const userLoginInitial = {
  email:'', password:'', isInValidEmail: false, isInValidPassword: false, 
}

interface Props{
  handleTab?: (tab: number) => void;
}
const FormLogin = () => {
  const {form,updateForm, handleLogin} = useForm({...userLoginInitial}, undefined  );

  return (
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
      <input type="text" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" 
      onChange={(e) => updateForm({...form, email: e.target.value})}
      />
      {
         form.isInValidEmail && <p className='text-red-500'>Email is not valid</p>
      }
      <input type="password" placeholder="Password" className="input input-bordered input-secondary w-full max-w-xs" 
      onChange={(e) => updateForm({...form, password: e.target.value})}
      />
      {
         form.isInValidPassword && <p className='text-red-500'>Password is not valid</p>
      }
      <button className="btn btn-outline btn-primary">Button</button>
      <ToastContainer />
    </form>
  )
}

export default FormLogin
import { ToastContainer } from "react-toastify";
import useForm from "./hooks/useForm";
import 'react-toastify/dist/ReactToastify.css';

const userRegisterInitial = {
  name:'', email:'', password:'', repeatPassword:'', isInValidEmail: false, isInValidPassword: false, isInValidRepeatPassword: false, isInvalidName: false
}
interface Props{
  handleTab: (tab: number) => void;
}

const FormSignUp = ({handleTab}: Props) => {  
  
  const {form, updateForm, handleSubmit} = useForm({...userRegisterInitial}, handleTab);
 
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" 
        onChange={(e) => updateForm({...form,name: e.target.value})}
      />
      {
        form.isInvalidName && <p className='text-red-500'>Name is not valid</p>
      }
      <input  type="email" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" 
        onChange={(e) => updateForm({...form, email: e.target.value})}        
      />
      {
         form.isInValidEmail && <p className='text-red-500'>Email is not valid</p>
      }
      <input   type="password" placeholder="Password" className="input input-bordered input-secondary w-full max-w-xs" 
        onChange={(e) => updateForm({...form, password: e.target.value})}
      />
      {
         form.isInValidPassword && <p className='text-red-500'>Password is not valid</p>
      }
      <input type="password" placeholder="Repeat password" className="input input-bordered input-secondary w-full max-w-xs" 
        onChange={(e) => updateForm({...form, repeatPassword: e.target.value})}        
      />
      {
       ('isInValidRepeatPassword' in form) &&  form.isInValidRepeatPassword && <p className='text-red-500'>Repeat password is not valid</p>
      }
      <button className="btn btn-outline btn-primary">Button</button>
      <ToastContainer />
    </form>
  )
}

export default FormSignUp
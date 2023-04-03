import { notFound } from './util';
import UserModel from '../../models/user/model'
import {IUser} from '../../models/user/schema'
import bcrypt from 'bcrypt'
import  jsonwebtoken from 'jsonwebtoken'
import env from '../../config/Env'

const userServices = () => {
  const loginService = async (user: Pick<IUser, 'email' |'password'> ) => {
    
    try {
      const foundUser = await UserModel.findOne({ email: user.email })      
      if (!foundUser) {
        return { ok: false, error: "wrong password"}
      }      
      const isMatch = bcrypt.compareSync(user.password, foundUser.password);      
      if (!isMatch) return { ok: false, error: "wrong password"};
      const token = jsonwebtoken.sign({ id: foundUser._id }, env.getSecretJWT(), {});
      if(!token) return { ok: false, error: "no token"};
      return { user: foundUser,  token }      
    } catch (error) {      
      return { ok: false, error: "wrong password"}
    }
  }
  const registerServices = async ({email,name, password}: Pick<IUser, 'email'| 'name'| 'password' >) => {
    try {
      const userFound =  await UserModel.findOne({ email });
      if (userFound) {
        return { ok: false, error: "user already exists" }
      }
      const salt = bcrypt.genSaltSync(8);
      const hash = bcrypt.hashSync(password, salt);
      const user = await UserModel.create({ email, name, password: hash });
      if (!user) {
        return notFound(0, "User does not exist");
      }
      return Promise.resolve(user);
      
    } catch (error) {
      console.log(error)
    }
  }
  return { loginService, registerServices }
}

export default userServices

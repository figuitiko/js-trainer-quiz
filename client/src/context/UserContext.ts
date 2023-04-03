import { createContext } from "react";
import { IUser } from "../reducers/user";

export interface IContextUser {
  user:IUser;
  login: (user: IUser) => void;
  logout: () => void;
  signUp: (user: IUser) => void;
}

export const UserContext = createContext<IContextUser>({} as IContextUser);
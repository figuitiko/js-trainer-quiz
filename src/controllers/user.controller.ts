import { notFound } from './../services/user-services/util';
import { Request, Response } from "express";
import userServices from "../services/user-services/user.services";
const { loginService, registerServices } = userServices();

const userController = () => {
    const getUser = (req: Request, res: Response) => {
        res.json({ message: "Hello World" });
    }
    const login = async (req: Request, res: Response) => {
        const { body: { email, password } } = req;
        try {
            const {user, token} = await loginService({ email, password });
            if(!user) return res.status(400).json({ok: false, error: "wrong password"});
            return res.status(200).json({ok: true, user, token});
        } catch (error) {
            return Promise.reject(error);
        }
    }
    const signUp = async (req: Request, res: Response) => {
        const { body: { email, name, password } } = req;
        try {
            const user = await registerServices({ email, name, password });
            if (!user) {
                return notFound(0, "User does not exist");
            }
            return res.status(200).json({ ok: true, user });
        } catch (error) {
            return Promise.reject(error);
        }
    }
    return {
        getUser,
        login,
        signUp
    }
}
export default userController;
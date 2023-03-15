import { Request, Response } from "express";

const userController = ()=>{
    const getUser = (req: Request, res: Response)=>{
        res.json({message: "Hello World"});
    }
    return {
        getUser
    }
}
export default userController;
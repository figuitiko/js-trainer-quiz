import express from 'express';
import  UserController  from '../controllers/user.controller';
const {getUser} = UserController();
const router = express.Router();

router.get('/api/users', (req, res) => {    
    getUser(req, res);
});

export { router as userRouter};
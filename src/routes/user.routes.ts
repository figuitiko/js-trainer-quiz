import express from 'express';
import  UserController  from '../controllers/user.controller';
const {getUser, login, signUp} = UserController();
const router = express.Router();

router.get('/api/users', getUser);
router.post('/api/users/login', login);
router.post('/api/users/signup', signUp);

export { router as userRouter};
import express from 'express';
const router = express.Router();
import  UserController  from '../controllers/user.controller';
const {getUser, login, signUp} = UserController();

router.get('/api/users', getUser);
router.post('/api/users/login', login);
router.post('/api/users/signup', signUp);

export { router as userRouter};
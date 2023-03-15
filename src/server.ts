import app from './config/App';
import env from './config/Env';
import { userRouter } from './routes/user.routes';

const PORT = env.getPort();

//routes
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
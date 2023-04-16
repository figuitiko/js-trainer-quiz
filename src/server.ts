import app from './config/App';
import env from './config/Env';
import { questionRouter } from './routes/question.routes';
import { quizRouter } from './routes/quiz.routes';
import { userRouter } from './routes/user.routes';

const PORT = env.getPort();

//routes
app.use(userRouter);
app.use(questionRouter);
app.use(quizRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
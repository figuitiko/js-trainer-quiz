import * as mongoose from 'mongoose';
import schema from './schema';

 const  quizDone = mongoose.model('QuizDone', schema);
 export default quizDone;

import * as mongoose from 'mongoose';
import schema from './schema';

const QuizModel = mongoose.model('Quiz', schema);
export default QuizModel;
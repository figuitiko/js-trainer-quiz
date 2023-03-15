import * as mongoose from 'mongoose';
import schema from './schema';

const QuestionModel = mongoose.model('Question', schema);
export default QuestionModel;
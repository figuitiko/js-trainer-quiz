import * as mongoose from 'mongoose';
import schema from './schema';

const AnswerModel = mongoose.model('AnswerModel', schema);
export default AnswerModel;
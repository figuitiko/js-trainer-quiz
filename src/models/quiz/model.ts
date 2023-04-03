import * as mongoose from 'mongoose';
import schema from './schema';

const TestModel = mongoose.model('Quiz', schema);
export default TestModel;
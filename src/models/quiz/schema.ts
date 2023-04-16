import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IQuiz extends mongoose.Document {
  name: string;
  description: string;
  questions: string[];
  type: string;
}

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },  
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question',
  }],
  type: { type: String, required: true, unique: true },
});

export default schema; 
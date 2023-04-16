import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IAnswer extends mongoose.Document {
  answerText: string;
  isCorrect: boolean;  
  question: mongoose.Types.ObjectId;
  numberAnswer: number;
}


const schema = new Schema({
  answerText: { type: String, required: true },
  isCorrect: { type: Boolean, default: false },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
  },
  numberAnswer: { type: Number, required: true },
});

export default schema;
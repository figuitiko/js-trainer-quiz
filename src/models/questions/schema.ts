import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export interface IQuestion extends mongoose.Document {
  questionText: string;
  answers: string[];  
  numberQuestion: number;   
}

const schema = new Schema({
  questionText: { type: String, required: true },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer',
  }],
  numberQuestion: { type: Number, required: true },
  
});

export default schema;
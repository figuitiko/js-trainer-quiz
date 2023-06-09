import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  quizzesDone: [{
    type: Schema.Types.ObjectId,
    ref: 'QuizDone',
  }],
}, {
  timestamps: true
}
);
export default schema;
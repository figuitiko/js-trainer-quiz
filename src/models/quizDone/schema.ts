import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const schema = new Schema({
  quiz: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  currentQuestion: Number,
  isActive: {
    type: Boolean,
    default: false,
  },
  isDone:{
    type: Boolean,
    default: false,
  },
  results: Number,
});
export default schema;

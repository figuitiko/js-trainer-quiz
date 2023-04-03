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
  results: Number,
});
export default schema;

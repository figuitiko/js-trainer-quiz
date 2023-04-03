import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  answerText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
  },
});

export default schema;
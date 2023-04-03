import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  questionText: { type: String, required: true },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer',
  }],
});

export default schema;
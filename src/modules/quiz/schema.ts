import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },  
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question',
  }],
});

export default schema; 
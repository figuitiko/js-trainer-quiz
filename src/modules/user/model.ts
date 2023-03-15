import * as mongoose from 'mongoose';
import schema from './schema';

const UserModel = mongoose.model('User', schema);
export default UserModel;





import * as mongoose from 'mongoose'
import schema from './schema'
import bcrypt from 'bcrypt'

const saltRounds = 8;

schema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) {
   user.password = await bcrypt.hash(user.password, saltRounds)
  }
  next()
})

const UserModel = mongoose.model('User', schema)
export default UserModel
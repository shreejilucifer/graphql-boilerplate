const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  id: { type: Schema.ObjectId, auto: true },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  age: { type: Number }
});

module.exports = mongoose.model('Users', UserSchema);

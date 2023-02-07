// Inside schema/user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
      }
 })
   
// it represents the entire collection of User data
const test = mongoose.model('test', UserSchema);
module.exports = test;
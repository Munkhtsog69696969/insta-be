const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  
});

exports.User = model('users', userSchema);
const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
  id:{
    type:String,
    required:true,
  },

  provider:{
    type:String,
    required:true,
  },

  profileImgUrl:{
    type:String,
    required:true,
  },

  fullname:{
    type:String,
    required:true,
  },

  followers:{
    type:Schema.Types.ObjectId,
    ref:"users",
  },

  following:{
    type:Schema.Types.ObjectId,
    ref:"users"
  }
  
});

exports.User = model('users', userSchema);
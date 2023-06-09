const { Schema, Types, model } = require('mongoose');

const validate=require("mongoose-validator");

const textValidator=[
    validate({
        validator:"isLength",
        arguments: [3, 100],
        message: 'Text should be between 3 and 50 characters'
    })
]

const postSchema = new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },

    photoUrls:[{
        type:String
    }],

    text:{
        type:String,
        required:true,
        validate:textValidator,
    },

    likes:[{
        type:Schema.Types.ObjectId,
        ref:"users",
    }],

    createdAt:{
        type:String,
        default:new Date(),
    }
});

exports.Post = model('posts', postSchema);
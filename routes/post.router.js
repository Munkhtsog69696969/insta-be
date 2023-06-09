const express = require('express');

const {User}=require("../models/user.model");
const {Post}=require("../models/post.model");

const postRouter = express.Router();

const isLoggedIn=(req,res,next)=>{
    if(req.user){
        next();
    }else{
        res.redirect(process.env.CLIENT_SERVER);
    }
}

postRouter
    .post("/:id" , isLoggedIn , async(req,res)=>{
        const id=req.params.id;

        const user=await User.findOne({id:id});

        // if(user){
        //     const newPost=await Post.create({
                
        //     })
        // }

        res.json({
            message:"DOne"
        })
    })
module.exports = postRouter;

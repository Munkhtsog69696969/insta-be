const express = require('express');

const passport = require('passport');

const authRouter = express.Router();

authRouter
    .get("/google" , passport.authenticate("google" , {scope:["profile"]}))
    .get("/google/callback" , passport.authenticate("google" , {
        successRedirect:"http://localhost:3000",
        failureRedirect:"https://insta-be-vm35.onrender.com/auth/login/failure"
    }))
    .get("/login/success",(req,res)=>{
        if(req.user){
            res.status(200).json({
                message:"Success",
                // user:req.user
            })
        }
    })
    .get("/login/failure",(req,res)=>{
        res.status(401).json({
            message:"Failed"
        })
    })
    .get("/logout",(req,res)=>{
        req.logout();
        res.redirect("http://localhost:3000");
    })
module.exports = authRouter;

const express=require("express");
const cors=require("cors");

require("dotenv").config();

const passport=require("passport");
require("./passport-auth/passport-google");
const cookieSession=require("cookie-session");
const session=require("express-session");
const mongoose=require("mongoose");
const app=express();
const port=process.env.PORT || 8080;
const connect=require("./mongoDb/connector");

connect();


app.use(express.json({limit:"50mb"}));
app.use(session({secret:"Net"}))
app.use(cors());
// app.use(
//     cookieSession({
//         name:"session",
//         keys:["Netrunner"],
//         maxAge:24*60*60*100
//     })
// );
app.use(passport.initialize());
app.use(passport.session());

const authRouter=require("./routes/auth.router");

app.use("/auth" , authRouter);

app.use("/",(req,res)=>{
    res.send("Server")
})

app.listen(port,()=>{
    console.log("Server running at :", port)
});
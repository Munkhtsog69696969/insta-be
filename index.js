const session=require("express-session");
const passport=require("passport");
const express=require("express");
const app=express();
app.use(session({secret:"Net"}));
app.use(passport.initialize());
app.use(passport.session());
const cors=require("cors");

require("dotenv").config();
require("./passport-auth/passport-google");

const port=process.env.PORT || 8080;
const connect=require("./mongoDb/connector");

connect();

app.use(express.json({limit:"50mb"}));
app.use(cors({
    origin:process.env.CLIENT_SERVER,
    methods:"GET,POST,DELETE,PUT",
    credentials:true,
}));

const authGoogleRouter=require("./routes/auth-passport-google.router");
const postRouter=require("./routes/post.router");

app.use("/auth" , authGoogleRouter);
app.use("/post" , postRouter);

app.get("/",(req,res)=>{
    res.send("Server")
})

app.listen(port,()=>{
    console.log("Server running at :", port)
});
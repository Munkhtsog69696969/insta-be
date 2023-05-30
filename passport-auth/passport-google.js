const passport = require("passport");

const GoogleStrategy=require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID="1081960340460-2iaftusfsjr16qqe4er5rs36bnb7gvjk.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null , profile);
  }
));

passport.serializeUser((user,done)=>{
    done(null , user)
});

passport.deserializeUser((user,done)=>{
    done()
})
const passport = require('passport')
require('dotenv').config({path:"./.env"})

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/api/user/google/callback"
  },
  
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });

    console.log(profile)

return cb(null, profile)
  }
));

passport.serializeUser(function(user, cb){
cb(null, user)
})

passport.deserializeUser(function(user, cb){
cb(null, user)
})
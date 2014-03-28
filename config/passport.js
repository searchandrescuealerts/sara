var passport = require('passport');
var _ = require('lodash');
// These are different types of authentication strategies that can be used with Passport. 
var LocalStrategy = require('passport-local').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google').Strategy;
var config = require('./config');
var db = require('./sequelize'); 

//Serialize sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
}); 

passport.deserializeUser(function(id, done) {
    db.User.find({where: {id: id}}).success(function(user){
        console.log('Session: { id: ' + user.id + ', username: ' + user.username + ' }');
        done(null, user);
    }).error(function(err){
        done(err, null);
    });
});

//Use local strategy
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    // From: PassportJS-Authentication on GitHub
    console.log("Starting the validation function");

    db.User.find({ where: { email : email } }).complete(function(err, user){
      if(err) {
        console.log("There was an error finding the person: " + err);
        return done(err);
      }
      if(!user) {
        console.log("There was no user");
        return done(null, false, { message : 'Incorrect email.' });
      }
      if(user.authenticate(password)){
          console.log("User authenticated");
          return done(null, user);
      }
      done(null, false, {
        // console.log("Incorrect password");
        message : 'Incorrect password'
      });
    });
  }
));

module.exports = passport;

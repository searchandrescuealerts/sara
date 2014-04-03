var passport = require('../../config/passport');
var db       = require('../../config/sequelize');

// login. 
// If successful, go to the myaccount page. 
// Otherwise go back to the index.
exports.login = function(req, res, next){
	console.log(req.body.email + " & " + req.body.password + " was sent to user.js >> login");
	passport.authenticate('local', {
			successRedirect: '/myaccount',
			failureRedirect: '/signup'
		})(req, res, next);
};

//Create a new user
exports.create = function(req, res){
	console.log('user reqest body: \n ' + req.body.email + " " + req.body.password + " " + req.body.phone + 
		'\n ' + req.body.locations);

	var user = db.User.build(req.body);
	user.salt = user.makeSalt();
	user.password = user.encryptPassword(req.body.password, user.salt);
	console.log('New User (local) : { id: ' + user.id + 
		'\n   email: ' + user.email + 
		'\n   phone: ' + user.phone +
		'\n   hashed password: ' + user.password + ' }');
	
	user.save().success(function(){
		res.sendfile("public/myaccount.html");
	}).error(function(err){
		res.sendfile('public/signup.html');
	});
};

// PUT user approved to be first responder
exports.approve = function(req, res){
	
};

// PUT user apply to be first responder
exports.apply = function(req, res){

};
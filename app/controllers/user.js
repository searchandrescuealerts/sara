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
		res.userID = user.id;
		console.log('in user.js: res.userID: ' + res.userID);
		console.log('in user.js: user.id: ' + user.id);
		console.log('in user.js, right before res.send(user), this is the user: ' + user);
		res.send(user); 
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

exports.getUser = function(req, res){
	//get the ID from the URL
	var parsedURL = req.url.split("/");
	var userID = parsedURL[parsedURL.length-1];
	if (!userID) { //this condition is for if an ending "/" is in the URL
			userID = parsedURL[parsedURL.length-2];
	}
	console.log("user.js: userID: " + userID);
	
	//search
	db.User.find({ where: {id: userID} }).success(function(user) {
		console.log("user.js: Found User: " + user.id + " " + user.given_name + " " + user.family_name);
		res.send(user);
	});
};
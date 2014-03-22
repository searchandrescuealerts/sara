var passport = require('passport');

// login. 
// If successful, go to the myaccount page. 
// Otherwise go back to the index.
exports.login = function(req, res){
	//console.log("entered login function");
	passport.authenticate('local', {
		successRedirect : "/myaccount",
		failureRedirect : "/"
	})
};

//
exports.create = function(req, res){
	console.log(req.body);
	var userJSON = req.body;
	userJSON.username
};

// GET user by email and password hash
exports.getUser = function(req, res){

};

// PUT user approved to be first responder
exports.approve = function(req, res){

};

// PUT user apply to be first responder
exports.apply = function(req, res){

};
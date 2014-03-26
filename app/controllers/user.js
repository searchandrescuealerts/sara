var passport = require('passport');
var db       = require('../../config/sequelize');


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
	console.log('user reqest body: \n ' + req.body);

	var user = db.User.build(req.body);
	user.salt = user.makeSalt();
	user.hashedPassword = user.encryptPassword(req.body.password, user.salt);
	console.log('New User (local) : { id: ' + user.id + 
		'\n   email: ' + user.email + 
		'\n   phone: ' + user.phone +
		'\n   hashed password: ' + user.hashedPassword + ' }');
	
	user.save().success(function(){
		res.redirect("/myaccount");
		// return res.redirect("/myaccount");

		// res.writeHead(302, {
		// 	'Location': 'public/myaccount.html'
		// });
		// return res.redirect("/myaccount");
	}).error(function(err){
		res.sendfile('public/signup.html');
	});
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
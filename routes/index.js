
/*
 * GET home page.
 */

exports.index = function(req, res){
	return res.sendfile('public/index.html');
};

/*
 * GET admin page 
 */

 exports.admin = function(req, res){
 	return res.sendfile('public/admin.html');
 }

 /*
 * GET signup page 
 */

 exports.signup = function(req, res){
 	return res.sendfile('public/signup.html');
 }

 exports.signup = function(req, res) {
 	return res.sendfile('public/signupLocation.html');
 }

 /*
 * GET myAccount page 
 */

 exports.myaccount = function(req, res){
 	return res.sendfile('public/myaccount.html');
 }

 /*
 * GET send message page
 */

 exports.sendMessage = function(req, res){
 	return res.sendfile('public/adminSendMessage.html');
 }

 
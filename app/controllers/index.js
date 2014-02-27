
/*
 * GET home page.
 */

exports.index = function(req, res){
	return res.sendfile('public/index.html');
};

 /*
 * GET signup page 
 */

 exports.signup = function(req, res){
 	return res.sendfile('public/signup.html');
 };

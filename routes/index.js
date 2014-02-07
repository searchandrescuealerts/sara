
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
 	return res.sendfile('views/admin.jade');
 }

 /*
 * GET signup page 
 */

 exports.signup = function(req, res){
 	return res.sendfile('public/signup.html');
 }
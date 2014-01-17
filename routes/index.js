
/*
 * GET home page.
 */

exports.index = function(req, res){
	return res.sendfile('public/index.html');
};
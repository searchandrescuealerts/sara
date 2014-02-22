/*
 * GET admin home page.
 */

exports.index = function(req, res){
	return res.sendfile('public/admin.html');
};

/*
 * POST new user
 */

exports.create = function(req, res){
	console.log(req.body);
	var userJSON = req.body;
	userJSON.username
};

exports.getUser = function(req, res){

};

exports.postUser = function(req, res) {
	console.log(req.body);
	res.send(req.body);
};

exports.myaccount = function(req, res){
	return res.sendfile('public/myaccount.html');
}
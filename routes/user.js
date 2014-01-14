
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.getUser = function(req, res){
	var id = req.params.id;
	var user = {
		id: id,
		first: "Joe",
		last: "Schmoo",
		birthday: new Date()
	}

	res.send(user);
};

exports.postUser = function(req, res) {
	console.log(req.body);
	res.send(req.body);
};
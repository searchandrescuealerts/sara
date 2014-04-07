var db       = require('../../config/sequelize');

exports.getAllActive = function(req, res){
	var activeUsers = db.User.findAndCountAll({
		where: { approved : 1 }
	}).success(function(users){
		console.log(users);
		res.send(users);
	});
};
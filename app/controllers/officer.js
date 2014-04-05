var db       = require('../../config/sequelize');

exports.getAllActive = function(req, res){
	var activeUsers = db.User.findAndCountAll({
		where: { approved : 'TRUE' }
	}).success(function(users){
		console.log(users);
	});
};
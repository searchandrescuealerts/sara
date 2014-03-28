var crypto = require('crypto');

module.exports = function(sequelize, DataTypes){
	
	var User = sequelize.define('User', 
		{
			// user_id
			email: DataTypes.STRING,  
			password: DataTypes.STRING, 
			salt: DataTypes.STRING,
			applied: DataTypes.BOOLEAN,
			approved: DataTypes.BOOLEAN,
			given_name: DataTypes.STRING,
			family_name: DataTypes.STRING,
			phone: DataTypes.STRING,
			age: DataTypes.INTEGER,
			ssn: DataTypes.STRING,
			street: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING,
			zip: DataTypes.STRING
			// lang_id: DataTypes.STRING
		},
		{
			freezeTableName: true,
			tableName: 'USER',
			instanceMethods: {
				makeSalt: function() {
					return this.salt = crypto.randomBytes(16).toString('base64');  
				},
				//for login
				authenticate: function(plainText) {
					return this.encryptPassword(plainText, this.salt) === this.password;
				},
				//for signing up
				encryptPassword: function(password, salt) {
					if (!password || !salt) return '';
					salt = new Buffer(salt, 'base64');
					return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
				},
				signup: function() {
					var User = this;
					hash(password, function(err, salt, hash) {
						if (err) throw err;
						User.create({
							email: email,
							salt: salt,
							hash: hash
						}, function(err, user){
							if (err) throw err;
							done(null, user);
						});
					});
				}
			},
			associate: function(models){
				User.hasMany(models.Picture);
				User.hasMany(models.Language);
				User.hasMany(models.Search_Radius_Preference);
				User.hasMany(models.Message);
			}
		}
	);	

	return User;
};
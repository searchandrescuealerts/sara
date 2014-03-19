module.exports = function(sequelize, DataTypes){
	
	var User = sequelize.define('USER', 
		{
			// user_id
			email: DataTypes.STRING,  
			password: DataTypes.STRING, // ANDY TODO: gonna have to figure out how to not store this in plain text
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
			instanceMethods: {

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
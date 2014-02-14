module.exports = function(sequelize, DataTypes){
	
	var user_account = sequelize.define('USER_ACCOUNT', 
		{
			email: DataTypes.STRING,  
			password: DataTypes.STRING, // ANDY TODO: gonna have to figure out how to not store this in plain text
			first_responder: DataTypes.BOOLEAN,
			f_name: DataTypes.STRING,
			l_name: DataTypes.STRING,
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

			}
		}
	);	

	return user_account;
};
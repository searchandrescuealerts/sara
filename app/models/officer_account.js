module.exports = function(sequelize, DataTypes){

	var officer_account = sequelize.define('OFFICER_ACCOUNT', 
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING
			// agency_id
		},
		{
			instanceMethods: {

			},
			associate: function(models){

			}
		}
	);

	return officer_account;
};
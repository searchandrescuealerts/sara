module.exports = function(sequelize, DataTypes){

	var lea = sequelize.define('LEA', 
		{
			agency_name: DataTypes.STRING,
			phone: DataTypes.STRING,
			street: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING,
			zip: DataTypes.STRING,
			member_since: DataTypes.DATE
		},
		{
			instanceMethods: {

			},
			associate: function(models){

			}
		}
	);	

	return lea;
};
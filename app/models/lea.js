module.exports = function(sequelize, DataTypes){

	var Lea = sequelize.define('LEA', 
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
			freezeTableName: true,
			tableName: 'LEA',
			instanceMethods: {

		},
			associate: function(models){
				Lea.hasMany(models.User);
			}
		}
	);	

	return Lea;
};
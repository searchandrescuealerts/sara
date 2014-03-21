module.exports = function(sequelize, DataTypes){

	var Officer = sequelize.define('OFFICER', 
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING
			// agency_id
		},
		{
			freezeTableName: true,
			tableName: 'OFFICER',
			instanceMethods: {

		},
			associate: function(models){
				Officer.hasMany(models.Campaign);
				Officer.belongsTo(models.Lea);
			}
		}
	);

	return Officer;
};
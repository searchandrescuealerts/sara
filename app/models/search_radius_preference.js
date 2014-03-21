module.exports = function(sequelize, DataTypes){

	var Search_Radius_Preference = sequelize.define('Search_Radius_Preference',
		{
			radius: DataTypes.INTEGER,
			lat: DataTypes.FLOAT,
			lon: DataTypes.FLOAT
		},
		{
			freezeTableName: true,
			tableName: 'SEARCH_RADIUS_PREFERENCE',
			instanceMethods: {

		},
			associate: function(models){
				Search_Radius_Preference.belongsTo(models.User);
			}
		}
	);
	
	return Search_Radius_Preference;
};
module.exports = function(sequelize, DataTypes){

	var Search_Radius_Preference = sequelize.define('SEARCH_RADIUS_PREFERENCE',
		{
			radius: DataTypes.INTEGER,
			lat: DataTypes.FLOAT,
			lon: DataTypes.FLOAT
		},
		{
			instanceMethods: {

			},
			associate: function(models){

			}
		}
	);
	
	return Search_Radius_Preference;
};
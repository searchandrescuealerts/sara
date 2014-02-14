module.exports = function(sequelize, DataTypes){

	var search_radius_preference = sequelize.define('SEARCH_RADIUS_PREFERENCE',
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
	
	return search_radius_preference;
};
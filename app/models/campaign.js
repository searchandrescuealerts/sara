module.exports = function(sequelize, DataTypes){

	var Campaign = sequelize.define('CAMPAIGN', 
		{
			lat: DataTypes.FLOAT, 
			lon: DataTypes.FLOAT, 
			start_date: DataTypes.DATE,
			end_date: DataTypes.DATE,
			hotline_number: DataTypes.STRING
		},
		{
			instanceMethods: {

			},
			associate: function(models){
				Campaign.belongsTo(models.Officer);
				Campaign.hasMany(models.Missing_Person);
				Campaign.hasMany(models.Message);
			}
		}
	);

	return Campaign;
};
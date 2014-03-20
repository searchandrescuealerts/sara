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
				console.log('starting Missing_Person associations for Campaign');
				Campaign.hasMany(models.Missing_Person);
				console.log('starting Message associations for Campaign');
				Campaign.hasMany(models.Message);
				console.log('starting Officer associations for Campaign');
				Campaign.belongsTo(models.Officer);
			}
		}
	);

	return Campaign;
};
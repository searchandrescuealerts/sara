module.exports = function(sequelize, DataTypes){

	var campaign = sequelize.define('CAMPAIGN', 
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
				
			}
		}
	);

	return campaign;
};
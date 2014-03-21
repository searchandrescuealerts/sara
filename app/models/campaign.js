module.exports = function(sequelize, DataTypes){

	var Campaign = sequelize.define('Campaign', 
		{
			lat: {
				type: DataTypes.FLOAT,
				validate: {
					not: ["[a-z]", 'i'], 	// will not allow letters
					isFloat: true   		// checks for valid floating point numbers
				} 
			},
			lon: {
				type: DataTypes.FLOAT,
				validate: {
					not: ["[a-z]", 'i'], 	// will not allow letters
					isFloat: true   		// checks for valid floating point numbers
				} 
			},
			start_date: {
				type: DataTypes.DATE,
				validate: {
					isDate: true,
				}
			},
			end_date: {
				type: DataTypes.DATE,
				validate: {
					isDate: true,
				}
			},
			hotline_number: DataTypes.STRING
		},
		{
			freezeTableName: true,
			tableName: 'CAMPAIGN',
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
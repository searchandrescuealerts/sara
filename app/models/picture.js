module.exports = function(sequelize, DataTypes){

	var picture = sequelize.define('PICTURE', 
		{
			picture: DataTypes.STRING,
			upload_date: DataTypes.DATE,
			notes: DataTypes.TEXT
		},
		{
			instanceMethods: {

			},
			associate: function(models){

			}
		}
	);

	return picture;
};
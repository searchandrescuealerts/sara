module.exports = function(sequelize, DataTypes){

	var Picture = sequelize.define('PICTURE', 
		{
			picture: DataTypes.STRING,
			upload_date: DataTypes.DATE,
			notes: DataTypes.TEXT
		},
		{
			freezeTableName: true,
			tableName: 'PICTURE',
			instanceMethods: {

		},
			associate: function(models){
				Picture.belongsTo(models.Missing_Person);
				Picture.belongsTo(models.User);
			}
		}
	);

	return Picture;
};
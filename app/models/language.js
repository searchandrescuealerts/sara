module.exports = function(sequelize, DataTypes){
	
	var language = sequelize.define('LANGUAGE', 
		{
			lang_en: DataTypes.STRING,
			lang_native: DataTypes.STRING
		},
		{
			instanceMethods: {

			},
			associate: function(models){

			}
		}
	);	

	return language;
};
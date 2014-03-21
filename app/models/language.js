module.exports = function(sequelize, DataTypes){
	
	var Language = sequelize.define('LANGUAGE', 
		{
			lang_en: DataTypes.STRING,
			lang_native: DataTypes.STRING
		},
		{
			instanceMethods: {

			},
			associate: function(models){
				Language.hasMany(models.User);
			}
		}
	);	

	return Language;
};
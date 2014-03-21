module.exports = function(sequelize, DataTypes){
	
	var Language = sequelize.define('Language', 
		{
			lang_en: DataTypes.STRING,
			lang_native: DataTypes.STRING
		},
		{
			freezeTableName: true,
			tableName: 'LANGUAGE',
			instanceMethods: {

		},
			associate: function(models){
				Language.hasMany(models.User);
			}
		}
	);	

	return Language;
};
module.exports = function(sequelize, DataTypes){

	var Missing_Person = sequelize.define('MISSING_PERSON',
		{
			fname: DataTypes.STRING,
			mname: DataTypes.STRING,
			lname: DataTypes.STRING,
			nickname: DataTypes.STRING,
			missing_date: DataTypes.DATE,
			found_date: DataTypes.DATE,
			notes: DataTypes.TEXT // ANDY TODO: maybe missing_person and notes has a 1 to many relationship?
		},
		{
			freezeTableName: true,
			tableName: 'MISSING_PERSON',
			instanceMethods: {

		},
			associate: function(models){
				Missing_Person.belongsTo(models.Campaign);
				Missing_Person.hasMany(models.Picture);
			}
		}
	);

	return Missing_Person;
};


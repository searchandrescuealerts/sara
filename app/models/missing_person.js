module.exports = function(sequelize, DataTypes){

	var missing_person = sequelize.define('MISSING_PERSON',
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
			instanceMethods: {

			},
			associate: function(models){

			}
		}
	);

	return missing_person;
};


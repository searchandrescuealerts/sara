module.exports = function(serialize, DataTypes){

	var Message_Template = serialize.define('MESSAGE_TEMPLATE', 
		{
			content: DataTypes.TEXT 
		},
		{
			freezeTableName: true,
			tableName: 'MESSAGE_TEMPLATE',
			instanceMethods: {

		},
			associate: function(models){
				Message_Template.hasMany(models.Message);
			}
		}
	);

	return Message_Template;
};
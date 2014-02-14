module.exports = function(serialize, DataTypes){

	var message_template = serialize.define('MESSAGE_TEMPLATE', 
		{
			content: DataTypes.TEXT 
		},
		{
			instanceMethods: {

			},
			associate: function(models){

			}
		}
	);

	return message_template;
};
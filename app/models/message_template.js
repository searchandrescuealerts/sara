module.exports = function(serialize, DataTypes){

	var Message_Template = serialize.define('MESSAGE_TEMPLATE', 
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

	return Message_Template;
};
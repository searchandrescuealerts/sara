module.exports = function(serialize, DataTypes){

	var Message = serialize.define('MESSAGE', 
		{
			message_content: DataTypes.TEXT, 
			sent_date: DataTypes.DATE,
			is_sms: DataTypes.BOOLEAN, 
			is_smart_phone: DataTypes.BOOLEAN,
			recipient_count: DataTypes.INTEGER
			// recipient_id
			// sender_id
		},
		{
			instanceMethods: {

			},
			associate: function(models){
				Message.belongsTo(models.Campaign);
				Message.hasOne(models.Message_Template);
			}
		}
	);

	return Message;
};
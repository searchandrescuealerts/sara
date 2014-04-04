var config 	  = require('../../config/config');

var client = require('twilio')(config.twilio.sid, config.twilio.auth);


exports.create = function(req, res){
	console.log('create campaign request body: \n ');
};
exports.getCampaign = function(req, res){

};
exports.archiveCampaign = function(req, res){

};
exports.getAll = function(req, res){

};
exports.getAllOpen = function(req, res){

};
exports.sendMessage = function(req, res){
	client.sendMessage({
		to: req.body.to,
		from: req.body.from,
		body: req.body.message
		// to: '303-478-7951',
		// from: config.twilio.phone,
		// body: 'Consider the full power of Twilio to be unleashed!!'
	}, function(err, responseData) {
		if (!err) {  // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
        console.log('This is inside the function after campaign.sendMessage was called. BANGORANG');
        console.log('Text sent to this number: ' + responseData.to)
        console.log('Text sent from this number: ' + responseData.from); // outputs "+14506667788"
        console.log('Body of the text: ' + responseData.body); // outputs "word to your mother."

		}
	});
	res.send('Hello!');
};
exports.getAllMessages = function(req, res){

};
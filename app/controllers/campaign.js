var config 	  = require('../../config/config');
var db       = require('../../config/sequelize');

var client = require('twilio')(config.twilio.sid, config.twilio.auth);


exports.create = function(req, res){
	console.log('create campaign request body: \n ');
};
exports.getCampaign = function(req, res){
	// console.log("campaign.js: Inside the getCampaign function");
	// console.log("campaign.js: req url: " + req.url);
	
	//get the ID from the URL
	var parsedURL = req.url.split("/");
	var campaignID = parsedURL[parsedURL.length-1];
	if (!campaignID) { //this condition is for if an ending "/" is in the URL
			campaignID = parsedURL[parsedURL.length-2];
	}
	console.log("campaign.js: campaignID: " + campaignID);
	
	//search
	db.Campaign.find({ where: {id: campaignID} }).success(function(campaign) {
		console.log("campaign.js: Found Campaign: " + campaign.id + " " + campaign.lat + " " + campaign.lon);
		res.send(campaign);
	}); 

	//SARAH TODO: also find the associated missing people
	//SARAH TODO: and the associated pictures
};
exports.archiveCampaign = function(req, res){

};
exports.getAll = function(req, res){

};
exports.getAllOpen = function(req, res){

};
exports.sendMessage = function(req, res){
	console.log("campaign.js: Sending Message...");
	client.sendMessage({
		to: req.body.to,
		from: config.twilio.phone,
		body: req.body.message
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
// app.post('/api/v1/campaign/sendMessages'
exports.sendMessages = function(req, res){
	var users = req.body;
	// for (var i = 0; i <)
};
exports.getAllMessages = function(req, res){

};
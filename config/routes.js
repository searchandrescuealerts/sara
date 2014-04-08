// console.log('ENTER ./config/routes.js');
var user     = require('../app/controllers/user');
var index    = require('../app/controllers/index');
var officer  = require('../app/controllers/officer');
var admin    = require('../app/controllers/admin');
var campaign = require('../app/controllers/campaign');
var message  = require('../app/controllers/message');
var page     = require('../app/controllers/page');

module.exports = function(app, passport, auth){
	console.log('Initializing Routes');

	
	app.get ('/signup',                			page.signup);
	app.get ('/myaccount/:id', 					page.myaccount);
	app.get ('/',                      			page.index); // Home Route
	app.get ('/signupLoc',             			page.signupLoc);
	app.get ('/sendMessage', 		   			page.sendMessage);
	app.get ('/sendMessage/:id', 				page.sendMessage);

	// User routes
	// app.get ('/login', 							page.login);
	//app.post('/login',							user.login);
	app.post('/login',							passport.authenticate('local'),
		function(req, res) {
			console.log('in POST("/login") sending back authenticated user: ' + req.user);
			res.send(req.user);
		});

	// this comes from the signup form
	app.post('/api/v1/user', 					user.create);
	app.get ('/api/v1/user/:id',				user.getUser);
	app.put ('/api/v1/user/:id/approve',		user.approve);
	app.put ('/api/v1/user/:id/apply', 			user.apply);

	// Officer routes
	app.get('/api/v1/officer/allActive',		officer.getAllActive);
	// Campaign routes 
	app.get ('/api/v1/campaign/:id', 			campaign.getCampaign);
	app.put ('/api/v1/campaign/:id', 			campaign.archiveCampaign);
	app.post('/api/v1/campaign', 				campaign.create);
	app.get ('/api/v1/:leaid/campaign', 		campaign.getAll);
	app.get ('/api/v1/:leaid/campaign/open', 	campaign.getAllOpen);
	app.post('/api/v1/campaign/message/:id', 	campaign.sendMessage);
	app.post('/api/v1/campaign/sendMessages', 	campaign.sendMessages);
	app.get ('/api/v1/campaign/message/:id', 	campaign.getAllMessages);

	// Message routes
	app.get ('/api/v1/message/:id', 			message.getMessage);
	app.put ('/api/v1/message/:id', 			message.updateMessage);

	app.get ('/admin', 							admin.admin);
}
// console.log('EXIT ./config/routes.js');
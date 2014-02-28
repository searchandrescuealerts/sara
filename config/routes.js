console.log('ENTER ./config/routes.js');
var user    = require('../app/controllers/user');
var index   = require('../app/controllers/index');
var officer = require('../app/controllers/officer');
var admin   = require('../app/controllers/admin');

module.exports = function(app, passport, auth){
	console.log('Initializing Routes');

	// User routes
	app.get('/signup', index.signup);
	// this comes from the signup form
	app.post('/user', user.create);
	app.get('/myaccount', user.myaccount);
	app.get('/user/:id', user.getUser);

	// Officer routes
	app.get('/sendMessage', officer.sendMessage);
	
	app.get('/admin', admin.admin);

	// Home Route
	app.get('/', index.index);
}
console.log('EXIT ./config/routes.js');
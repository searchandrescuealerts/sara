console.log('ENTER ./config/routes.js');
var user = require('../app/controllers/user');
var index = require('../app/controllers/index');

module.exports = function(app, passport, auth){
	console.log('Initializing Routes');

	// User routes
	app.get('/signup', index.signup);
	// this comes from the signup form
	app.post('/user', user.create);
	app.get('/myaccount', user.myaccount);
	app.get('/user/:id', user.getUser);

	// Home Route
	app.get('/', index.index);

	app.get('/admin', routes.admin);
	app.get('/sendMessage', routes.sendMessage);
}
console.log('EXIT ./config/routes.js');
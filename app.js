/**
 * Module dependencies.
 */
var express = require('express'); 
var http    = require('http');

// environment setup
var env 	= process.env.NODE_ENV || 'development';
env = 'production'; // Andy TODO: Figure out how this is toggled. when you want to switch, what do you do?
console.log('Environment: ' + env);

var config 	= require('./config/config');
var db      = require('./config/sequelize');
var passport = require('./config/passport');
var auth = require('./config/middlewares/authorization');
var app = express();

// Initialize Express
require('./config/express')(app, passport);

//Initialize Routes
require('./config/routes')(app, passport, auth);

// all environments
var port = config.port;
app.set('port', port);
// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }


//======================================================//
//							API							//
//======================================================//
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// expose app
exports = module.exports = app;
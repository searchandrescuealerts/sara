
/**
 * Module dependencies.
 */

var express = require('express'); //hey
var routes 	= require('./routes');
var user 	= require('./routes/user');
var http 	= require('http');
var path 	= require('path');

var db      = require('./config/sequelize');
// environment setup
var env 	= process.env.NODE_ENV || 'development';
env = 'production'; // Andy TODO: Figure out how this is toggled. when  you want to switch, what do you do?
var config 	= require('./config/config');

console.log('Environment: ' + env);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

app.get('/', routes.index);
app.get('/signup/', routes.signup);
app.get('/myaccount/', routes.myaccount);
app.get('/users', user.list);
app.get('/users/:id', user.getUser);
app.post('/users/:id', user.postUser);

app.get('/admin', routes.admin);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

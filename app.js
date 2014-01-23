
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mysql = require('mysql');

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

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users/:id', user.getUser);
app.post('/users/:id', user.postUser);

app.get('/admin', routes.admin);

console.log('Attempting to connect to the MySQL database...');

// database connection
var connection = mysql.createConnection({
	host : 'searchandrescue.db.6706839.hostedresource.com',
	user : 'searchandrescue',
	password : 'ISRock5!',
	database : 'searchandrescue'
});

console.log('Connection variable created...');

connection.connect();

console.log('Connection to MySQL database has been made...');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

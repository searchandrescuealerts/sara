
/**
 * Module dependencies.
 */

var express 		= require('express');
var routes 			= require('./routes');
var user 			= require('./routes/user');
var http 			= require('http');
var path 			= require('path');
// var L10n			= require('L10n');
var passwordHash 	= require('password-hash');
// // environment setup
// var env 	= process.env.NODE_ENV || 'development';
// // env = 'production'; // don't uncomment this line until I've spoken to Jeff Potter
// var config 	= require('./config.json')[env];
// console.log(env);
// if(env == 'development'){
// 	// sequelize sqlite setup for development
// 	var Sequelize = require('sequelize-sqlite').sequelize;
// 	var sqlite    = require('sequelize-sqlite').sqlite;
// 	var db 		  = new Sequelize(config.db.database, config.db.username, config.db.password, {
// 		dialect: config.db.dialect,
// 		storage: './searchandrescue.db',
// 		sync: { force: true }
// 	});
// 	console.log('sqlite db initialized');
// 	db
// 		.authenticate()
// 		.complete(function(err){
// 			if(!!err){
// 				console.log('Unable to connect to the database: ', err)
// 			} else {
// 				console.log('SQLITE Database connection has been established successfully.');
// 			}
// 		});
// } else if (env == 'production'){
// 	console.log('Attempting to connect to the MySQL database...');

// 	// MySQL database connection
// 	var Sequelize = require('sequelize-mysql').sequelize;
// 	var mysql     = require('sequelize-mysql').mysql;
// 	var db 		  = new Sequelize(config.db.database, config.db.username, config.db.password, {
// 		host : config.db.host,
// 		dialect: config.db.dialect
// 	});
// 	console.log('Connection variable created...');
// 	console.log('Connection to MySQL database has been made...');
// }

// /** 
//  * DATA MODELS DATA MODELS DATA MODELS DATA MODELS DATA MODELS DATA MODELS 
//  */
// var user_account = db.define('user_account', {
// 	username: Sequelize.STRING,
// 	password: Sequelize.STRING, // ANDY TODO: gonna have to figure out how to not store this in plain text
// 	type: Sequelize.STRING,
// 	first_responder: Sequelize.BOOLEAN
// });
// var person = db.define('person', {
// 	name: Sequelize.STRING, // ANDY TODO: I think we should do fname & lname
// 	phone: Sequelize.STRING,
// 	age: Sequelize.INTEGER,
// 	ssn: Sequelize.STRING, // ANDY TODO: gonna have to figure out how to not store this in plain text
// 	street: Sequelize.STRING,
// 	city: Sequelize.STRING,
// 	state: Sequelize.STRING,
// 	zip: Sequelize.STRING
// });
// var language = db.define('language', {
// 	lang: Sequelize.STRING// ANDY TODO: I think we should have this variable be 'lang' rather than language_name
// });
// var LEA = db.define('LEA', {
// 	name: Sequelize.STRING,
// 	member_since: Sequelize.STRING
// 	// ANDY TODO: I think we need more here. agency location? agency address? any other info about the agency?
// });
// var campaign = db.define('campaign', {
// 	// latNum: Sequelize.DECIMAL, // ANDY TODO: I think we need lat and lon, not just location(GPS)
// 	// longNum: Sequelize.DECIMAL, // ANDY TODO: for some reason I'm getting an error with these, I'm working on it!
// 	start_date: Sequelize.DATE,
// 	end_date: Sequelize.DATE,
// 	hotline_number: Sequelize.STRING
// });
// var missing_person = db.define('missing_person', {
// 	fname: Sequelize.STRING,
// 	mname: Sequelize.STRING,
// 	lname: Sequelize.STRING,
// 	nickname: Sequelize.STRING,
// 	missing_date: Sequelize.DATE,
// 	found_date: Sequelize.DATE,
// 	notes: Sequelize.STRING // ANDY TODO: maybe missing_person and notes has a 1 to many relationship?
// });
// var message = db.define('message', {
// 	message_content: Sequelize.STRING, // ANDY TODO: I think 'message' is a little too vague for a field, plus it's the name of the table
// 	sent_date: Sequelize.DATE,
// 	isSMS: Sequelize.BOOLEAN, // ANDY TODO: I think isSMS is better than sms, it connotates that the field is a boolean a little more clearly
// 	isSmart_phone: Sequelize.BOOLEAN,
// 	recipient_count: Sequelize.INTEGER
// });

// db.sync({force: true}).success(function(){
// 	console.log('successfully syncronized!');
// }).error(function(err){
// 	console.log(err);
// });

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
app.get('/users', user.list);
app.get('/users/:id', user.getUser);
app.post('/users/:id', user.postUser);

app.get('/admin', routes.admin);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

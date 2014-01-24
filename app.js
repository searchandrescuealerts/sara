
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var config = require('./config.json')[env];

/**
 * SEQUELIZE SETUP
 * See http://sequelizejs.com/docs/latest/models for more information
 */

var Sequelize = require('sequelize-mysql').sequelize;
console.log(config);
var db = new Sequelize(config.db.database, config.db.username);

var User = db.define('User', {
	// Mapping to DB
		name: Sequelize.STRING,
		address_1: Sequelize.STRING,
		address_2: Sequelize.STRING,
		state: Sequelize.STRING,
		phone: Sequelize.STRING,
		email: {
			type: Sequelize.STRING,
			validate : {
				isEmail: true
			}
		},
		type: Sequelize.STRING,
		isAdmin: Sequelize.BOOLEAN
	},
	// Methods
	{
		instanceMethods: {
    		method2: function() { return 'foo' }
  		}
	}
);
 
var Campaign = db.define('Campaign', {
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE,
  hotlineNumber: Sequelize.STRING
});


User.hasMany(Campaign);
Campaign.hasOne(User);

db.sync({force: true}).success(function(){
	console.log('successfully syncronized!');
}).error(function(err){
	console.log(err)
});


/**
 * Express app setup
 */


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
app.get('/users/:id', function(req, res){
	User.find(req.params.id)
		.success(function(user){
			res.send(user);
		}).error(function(err){
			console.log(err);
			res.send(404);
		});
});
app.post('/users', function(req, res){

	console.log(req.body);

	User.create(req.body)
		.success(function(user){
			res.send(201);
			console.log('stored user -> '+ user.name);
		}).error(function(err){
			console.log(err);
			res.send(404);
		});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

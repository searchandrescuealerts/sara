var express = require('express');
var config  = require('./config');

module.exports = function(app, passport) {
	app.set('showStackError', true);

	app.use(express.favicon());
	app.use(express.static(config.root + '/public'));
	// console.log(config.root + '/public');
	app.use(express.logger('dev'));

	//JADE stuff
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');

	app.configure(function(){
		// cookieParser should be above session
		app.use(express.cookieParser());
		app.use(express.bodyParser());
		app.use(express.session({secret: 'keyboard cat' }));

		//I'm not sure what these do... --l3mm0n
		app.use(express.urlencoded());
		app.use(express.json());
		app.use(express.methodOverride());

		//use passport session
	    app.use(passport.initialize());
	    app.use(passport.session());

	    app.use(app.router);
	});
}
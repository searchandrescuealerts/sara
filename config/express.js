var express = require('express');
var config  = require('./config');

module.exports = function(app, passport) {
	// console.log('Initializing Express');

	app.set('showStackError', true);

	app.use(express.favicon());
	app.use(express.static(config.root + '/public'));
	console.log(config.root + '/public');
	app.use(express.logger('dev'));
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');

	app.configure(function(){
		// cookieParser should be above session
		app.use(express.cookieParser());
		// request body parsing middleware should be above methodOverride
	    app.use(express.urlencoded());
		app.use(express.json());
		app.use(express.methodOverride());

		//use passport session
	    app.use(passport.initialize());
	    app.use(passport.session());

	    app.use(app.router);

	   // console.log(app.get('views'));
	});
}
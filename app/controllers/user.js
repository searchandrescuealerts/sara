var passport	= require('../../config/passport');
var db       	= require('../../config/sequelize');
var util 		= require('util');

// app.post('/api/v1/campaign') -- Create a new user
exports.create = function(req, res){

	// Building a user creates a non-persistant object that has not been saved to the db yet.
	// we build rater than create a user here because the password must be salted and hashed before saving to db.
	var user = db.User.build(req.body);
	user.salt = user.makeSalt();
	user.password = user.encryptPassword(req.body.password, user.salt);
	console.log('New User (local) : { id: ' + user.id + 
		'\n   email: ' + user.email + 
		'\n   phone: ' + user.phone +
		'\n   hashed password: ' + user.password + ' }');

	// save the  user object that was just built to the database
	user.save().success(function(){
		console.log('User ' + user.email + ' was saved in the database');
		res.userID = user.id;
		res.send(user); 
	}).error(function(err){
		res.sendfile('public/signup.html');
	});

	// Loop through all of the locations!
	for (var i = 0; i < req.body.locations.length; i++){
 
	// We can do a MODEL.create here because there is no further manipulation of fields
	// before saving the object to the database
		db.Search_Radius_Preference
				.create({ 
					radius: req.body.locations[i].radius, 
					lat: req.body.locations[i].lat, 
					lon: req.body.locations[i].lng, 
					USERId: user.id 
				}).success(function(srp) {
					console.log('new search radius preference created for ' 
						+ user.email + ': \n' + 
						'lat: ' + srp.lat + ': \n' +
						'lon: ' + srp.lon + ': \n' +
						'radius: ' + srp.radius);
					srp.setUser(user);
				});
	}
};

// app.put ('/api/v1/user/:id/approve') -- user approved to be first responder
exports.approve = function(req, res){
	
};

// app.put ('/api/v1/user/:id/apply') -- user apply to be first responder
exports.apply = function(req, res){

};  

// app.get ('/api/v1/user/:id') -- get and return a user
exports.getUser = function(req, res){
	//get the ID from the URL
	var parsedURL = req.url.split("/");
	var userID = parsedURL[parsedURL.length-1];
	if (!userID) { //this condition is for if an ending "/" is in the URL
			userID = parsedURL[parsedURL.length-2];
	}
	console.log("user.js: userID: " + userID);
	
	//search
	db.User.find({ where: {id: userID} }).success(function(user) {
		console.log("user.js: Found User: " + user.id + " " + user.phone + " " + user.email);
		res.send(user);
	});
};
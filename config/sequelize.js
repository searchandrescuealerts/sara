var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize-mysql').sequelize;
var env       = 'production';
var config    = require('./config');
var db        = {};
var _         = require('lodash');

console.log('Initializing Sequelize');

// create instance of sequelize
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
	host : config.db.host,
	dialect: config.db.dialect
	// storage: config.db.storage ANDY TODO: Where is this in sequelize-starter?
});

console.log('Sequelize variable created');
console.log(config.modelsDir);
// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(config.modelsDir)
 	.filter(function(file){
 		return (file.indexOf(".") !== 0) && (file !== 'index.js');
 	})
 	// import model files and save model names
 	.forEach(function(file){
 		console.log('Loading model file: ' + file);
 		var model = sequelize.import(path.join(config.modelsDir, file));
 		db[model.name] = model;
 	})
 // invoke associations on each of the models
 Object.keys(db).forEach(function(modelName){
 	if (db[modelName].options.hasOwnProperty('associate')) {
 		db[modelName].options.associate(db)
 	}
 });

// Synchronizing any model changes with the database
// WARNING: this will DROP your database every time you re-run your application
sequelize.sync({force: true}).success(function(){
	console.log('successfully syncronized!');
}).error(function(err){
	console.log(err);
});

console.log('Database dropped and syncronized');

// assign the sequelize variables to the db object and returning the db
module.exports = _.extend({
	sequelize: sequelize,
	Sequelize: Sequelize
}, db);

console.log('Connection variable created...');

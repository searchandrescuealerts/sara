var path = require ('path');
var rootPath = path.normalize(__dirname + '../../..');

module.exports = {
	root      	: rootPath,
	modelsDir 	: rootPath + '/app/models/',
	port      	: 8081,
	twilio		: {
		sid		: "ACf9a4381ebf862036f7b6d2ae1320fb6b",
		auth	: "2522a4e2422d7f523ea28c593dfd6005",
		phone   : "+13852357256" 
	}		
}
var path = require ('path');
var rootPath = path.normalize(__dirname + '../../..');

module.exports = {
	root      : rootPath,
	modelsDir : rootPath + '/app/models/',
	port      : 3000
}
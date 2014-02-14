var _ = require('lodash');

// Load app configuration

// _.assign combines the two objects into a bigger object
module.exports = _.assign(
	// configuration variables that will be the same across all environments
	require(__dirname + '/../config/env/all.js'),
	// configuration variables that are currently only production but will be environment-specific
	require(__dirname + '/../config/env/production.js')
);
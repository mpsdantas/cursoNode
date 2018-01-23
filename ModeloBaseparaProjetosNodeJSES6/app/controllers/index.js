const index = require('../models/github.js');
exports.index = (application,req,res) => {
	const repositorios = index.github();
	return repositorios;
};
const index = require('../controllers/index.js');
module.exports = (application) => {
	application.get('/', async (req,res) => {
		const repo = await index.index();
		console.log(repo);
		res.send('Bem vindo a sua aplicação NodeJS com ES8');
	});
};
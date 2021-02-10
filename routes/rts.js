const { Router } = require('express');
const router = Router();

const { Quote } = require('../data-base');

//ruta con un template
router.get('/', (req, res) => {
	res.render('index.ejs')
});

router.post('/quotes', async (req, res) =>{
	//1.creamos la primera cita
	await Quote.create({
		author: req.body.author,
		quote: req.body.quote
	});

/* 	quote.push(req.body); */
/* 	//2.recuperamos todas las citas
	const quotes = await Quote.findAll(); */
	
	console.log('POST!!!!');
	
	//3. cargamos la vista
	res.redirect('/quotes')
});

router.get('/quotes', async (req, res) => {
	const quotes = await Quote.findAll();
	console.log(quotes);
	res.render('quotes.ejs', {quotes: quotes});
});
module.exports = router;
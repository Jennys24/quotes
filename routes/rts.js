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
	//3. cargamos la vista
	res.redirect('/quotes')
});

router.get('/quotes', async (req, res) => {
	const quotes = await Quote.findAll();
	console.log(quotes);
	let mensaje = req.flash('mensaje') ;
  console.log(mensaje);
	
	res.render('quotes.ejs', {quotes: quotes, mensaje: mensaje});
});

router.get('/eliminar/:id', async (req,res) => {
  const quotte = await Quote.findByPk(req.params.id);
  await quotte.destroy();
  //req.flash('mensaje', `La cita fue eliminada.`);
  res.json({estado:true, mensaje:`La cita fue eliminada.`});
});

router.post('/editar/:id' , async (req,res) => {
  let editar = await Quote.findOne(req.params.id);
	await editar.update({where: {author: author, quote: quote}});
  await editar.save();

  req.flash('mensaje', `La cita fue editada.`);
  res.redirect("/quotes");
});

router.get('/editar/:id', async (req, res) => {
  const quotte = await Quote.findByPk(req.params.id);  
	let mensaje = req.flash('mensaje') ;
  console.log(mensaje);
  res.render('quotes.ejs', {quote: quote, mensaje: mensaje})
});

module.exports = router;
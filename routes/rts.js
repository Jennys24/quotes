const { Router } = require('express');
const router = Router();

const quotes = [
	{
		author: "El Cuervo",
		quote: "No siempre lloverá"
	},
	{
		author: "Montesquieu",
		quote: "Hay que estudiar mucho para saber poco"
	},
]

router.get("/", (req, res) =>{
	res.render("index");
});


router.get('/quotes', function(req, res){
	res.render('quotes', {quotes: quotes});
	
});

router.post("/quotes", (req, res) =>{
	req.body = { 
		author: req.body.author, 
		quote: req.body.quote, 
  };
	quotes.push(req.body)
	res.render("quotes", {quotes: quotes});
});


module.exports = router;
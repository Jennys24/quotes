const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.use('/public', express.static("public"));

app.use(express.json() );
app.use(express.urlencoded({extended:true})); 
app.use(session({secret: 'numj'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(require('./routes/rts'));

app.listen( port, () => console.log(`Listening on port: ${port}`) );
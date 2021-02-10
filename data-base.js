const Sequelize = require('sequelize');
const QuotesModel = require('./models/qtables');

// acá creamos la conexión a la Base de Datos
const sql = new Sequelize('quotes', 'root', 'abigail', {
  host: 'localhost',
  dialect: 'mysql'
});

// acá inicializamos los modelos
const Quote = QuotesModel(sql, Sequelize);

//  después sincronizamos nuestro código con la base de datos
sql.sync()
.then(() => {
  console.log('Base de datos y tablas creadas');
});

// finalmente acá listamos todos los modelos que queremos exportar
module.exports = {
  Quote,
};
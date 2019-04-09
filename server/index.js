var express = require('express');
var app = express();
const PORT = 3000;

app.listen(3000, function () {
  console.log(`Server running at port ${PORT}`);
});

app.get('/', function (req, res) {
  res.send('Hola Dani');
  console.log(req.headers);
});

// ↓ TEMPLATE: GET
app.get('/templates', function (req, res) {
    res.render('index' , {
        title:'Pug templates',
        mensaje:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.',
        vegetables: [
            "carrot",
            "potato",
            "beet",
            "apple",
            "orange",
        ]
    });
});

// ↓ TEMPLATE :POST
app.post('/templatepost', function (req, res) {
    res.render('templatepost' , {
        title:'Post view',
        mensaje:'Mensaje post view'
    });
});

app.set(
    'view engine' ,'pug',
)
app.set(
    'views', './views'
)
// ↑↑ END TEMPLATES 
let estaLogueado = () => true;
let testMiddelware =  ( (req, res, next) =>{
  if( estaLogueado() ) {
    res.send(`!-- USTED FUE AUTORIZADO --!   
      HTTP =>  ${req.method}   
      URL =>  ${req.url}
      IP =>  ${req.ip} 
      Host =>  ${req.hostname}`
      );
    console.log('-VALIDO-');
    next();
  }else {
    res.send(`!X-X NO ESTA LOGUEADO X-X-X DENEGADO X-X!   
      HTTP =>  ${req.method}   
      URL =>  ${req.url}
      IP =>  ${req.ip}
      Host =>  ${req.hostname}`
      );
    console.log('-INVALIDO-');
  }
});



//Esto es pa que no se dañe los otros
app.get(('/middelware'), (req, res, next) => {
  res.send(`Servidor corriendo`);
});


app.get('/daniDos', function (req, res) {
  res.send('Hola Dani2');
});

app.get('/about', function (req, res) {
  res.send('about');
});

app.post('/about22', function (req, res) {
  res.send('Got a POST request');
});

// app.listen(PORT, function () {
// console.log(`Server running at port ${PORT}`);
// });

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost:3306",
  user: "root",
  password: "0000",
  database : 'my_db'
});

//connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

//sconnection.end()

app.use(testMiddelware);

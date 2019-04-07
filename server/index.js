var express = require('express');
var app = express();
const PORT = 3000;

let estaLogueado = () => false;
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


app.use(testMiddelware);


//Esto es pa que no se dañe los otros
app.get(('/middelware'), (req, res, next) => {
  res.send(`Servidor corriendo`);
  });


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
  
app.get('/', function (req, res) {
  res.send('Hola Dani');
  console.log(req.headers);
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

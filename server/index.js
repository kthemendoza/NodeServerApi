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
app.get(('/'), (req, res, next) => {
  res.send(`Servidor corriendo`);
  });


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });

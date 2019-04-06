var express = require('express');
var app = express();
const PORT = 3000;
app.get('/', function (req, res) {
    // res.send('Hola mundo desde el sena');
    res.render('index' , {title:'Prueba' , mensaje:'Template Pug'});
});
app.listen(3000, function () {
    console.log(`Server running at port ${PORT}`);
});
app.set(
    'view engine' ,'pug',
)
app.set(
    'views', './views'
)
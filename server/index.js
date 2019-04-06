var express = require('express');
var app = express();
const PORT = 3000;

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

app.listen(3000, function () {
console.log(`Server running at port ${PORT}`);
});
var express = require('express');
var app = express();
const PORT = 3000;
app.get('/', function (req, res) {
res.send('Hola mundo desde el sena');
});
app.listen(3000, function () {
console.log(`Server running at port ${PORT}`);
});

var express = require('express');
var app = express();
const PORT = 3000;

// ↓ TEMPLATE: GET
app.get('/templates', function (req, res) {
    res.render('index' , {
        title:'Pug templates',
        mensaje:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.',
        vegetables: [
            "carrot",
            "potato",
            "beet"
        ]
    });
});

// ↓ TEMPLATE :POST
app.post('/templatepost', function (req, res) {
    res.render('templatepost' , {
        title:'Post view',
        mensaje:'Mensaje post view',
    });
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
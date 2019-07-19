var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
res.render('index.ejs');
});



app.listen(3000, (req, res) => {
    console.log('Serving on Port 3000...');
});
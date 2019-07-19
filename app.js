var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
res.render('index');
});



app.listen(3000, (req, res) => {
    console.log('Serving on Port 3000...');
});
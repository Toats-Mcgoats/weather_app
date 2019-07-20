const express = require('express');
const app = express();
const request = require('request');

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    request('https://api.darksky.net/forecast/8ffd27d6e91e3d54d3477bb7f711387a/37.8267,-122.4233', (error, response, body) => {
        if(!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body);
            res.render('index', {data:parsedData});
        }
    });
});





app.listen(3000, (req, res) => {
    console.log('Serving on Port 3000...');
});
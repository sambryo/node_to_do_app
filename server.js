const express = require('express')
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null; // modify template with out restarting
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('index', {})
});

app.post('/todos', function(req, res){
    res.json(req.body);
})

app.listen(3000, function(){
    console.log('listening on port 3000')
})

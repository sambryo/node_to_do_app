const express = require('express')
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/mongoose_express_todo').then(function(){
    console.log('Database connected.');
});

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null; // modify template with out restarting
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', routes);

app.listen(3000, function(){
    console.log('listening on port 3000')
})

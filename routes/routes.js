const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', function(req, res){
    res.render('index', {})
});

router.post('/todos', function(req, res){
    res.json(req.body);
})

module.exports = router;

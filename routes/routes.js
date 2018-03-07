const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', function(req, res){
    Todo.find({}).then(function(results){
        res.render('index', {todos: results})
    });
});

router.post('/todos', function(req, res){
    let newTodo = new Todo({description: req.body.description});
    newTodo.save().then(function(result){
        console.log(result);
        res.redirect('/');
    }).catch(function(err){
        console.log(err);
        res.redirect('/');
    });
});

router.post('/todos/:id/completed', function(req, res){
    console.log(req.params)
    res.redirect('/');
});

module.exports = router;

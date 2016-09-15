'use strict'
var express = require('express');
const Todo = require('../database/todo.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.getAll().then((data) => {
    res.render('index', { todos: data });
  });
});

router.post('/todos', (req, res, next) => {
  Todo.insert(req.body).then((response) => {
    res.redirect('/')
  })
})

module.exports = router;

'use strict'

const Todo = require('./connection.js').get('todo')

function insert(data) {
  return Todo.insert(data)
}

function getAll() {
  return Todo.find({})
}

module.exports = {
  insert,
  getAll
}

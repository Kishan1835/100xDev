// const { default: mongoose, default: mongoose } = require("mongoose")

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.ft0y7ag.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}
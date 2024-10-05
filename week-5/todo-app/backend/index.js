// basic express code
const express = require("express")
const { todo } = require("./db")
const { createTodo, updateTodo } = require("./types")

const app = express()

app.use(express.json())

// body{
// title: "name of the task"// string
// description: "what the work" // string
// }

app.post("/todo", async (req, res) => {
    const createPayLoad = req.body
    const parsedPayLoad = createTodo.safeParse(createPayLoad)
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }
    // put it in mongo
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})


app.get("/todos", async (req, res) => {
    const todos = await todo.find({})
    console.log("fetching todos",todos) // promise

    res.json({
        todos
    })
})


app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload)
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }

    await todo.updateOne({
        _id: req.body.id
    },
        {
            completed: true

        })

    res.json({
        msg: "todo marked as completed"
    })
})


app.listen(3000, function () {
    console.log("example app is running on the post 3000")
})
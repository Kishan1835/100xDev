const mongoose = require("mongoose")
const express = require("express")

const app = express()
app.use(express.json())

mongoose.connect("mongodb://admin:admin@ac-cbjtkyu-shard-00-00.ft0y7ag.mongodb.net:27017,ac-cbjtkyu-shard-00-01.ft0y7ag.mongodb.net:27017,ac-cbjtkyu-shard-00-02.ft0y7ag.mongodb.net:27017/usersdata?replicaSet=atlas-i1geks-shard-0&ssl=true&authSource=admin")

const User = mongoose.model("Users", { name: String, email: String, password: String })

app.post("/signup", async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name


    const existingUser = await User.findOne({ email: username })

    if (existingUser) {
        return res.status(400).send("Username already exists")
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });
    await user.save()

    res.json({
        msg: "user created success"
    })
})


app.listen(3000)
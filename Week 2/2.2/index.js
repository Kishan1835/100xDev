const express = require("express")
const port = 3000

const app = express()

app.get('/', function (req, res) {
    res.send(" hello world! this side nodemon ")
})

app.listen(port, function () {
    console.log(`App listening to the port maping ${port}`)
})
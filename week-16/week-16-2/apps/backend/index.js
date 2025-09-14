const express = require("express")
const app = express()
const port = 3002

app.get("/", (req, res) => {
    req.send("Hello World!")
})

app.listen(port => {
    console.log(`App is listening on port ${port}`)
})
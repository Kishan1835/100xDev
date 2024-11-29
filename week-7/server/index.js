const express = require("express")
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(cors())
app.get("/notification", (req,res) => {
    const data = {
        network: Math.floor(Math.random() * 120),
        jobs: Math.floor(Math.random() * 60),
        messaging: Math.floor(Math.random() * 23),
        notifications: Math.floor(Math.random() * 120),
    }
    res.json(data)
})


app.listen(3000, () => {
    console.log("listing to port 3000")
})
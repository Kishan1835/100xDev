const express = require("express")

const app = express()

const users = {
    name: "john",
    kidneys: [{
        healthy: false
    }]
}

app.use(express.json())

app.get("/", function (req, res) {
    const johnKidneys = users.kidneys
    const numofkidneys = johnKidneys.length
    let numofhealthyKidneys = 0
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy)
            numofhealthyKidneys = numofhealthyKidneys + 1
    }
    const numunhealthyKidneys = numofkidneys - numofhealthyKidneys
    res.json({
        numofkidneys,
        numofhealthyKidneys,
        numunhealthyKidneys
    })
})


app.post("/", function (req, res) {

    const isHealthy = req.body.isHealthy
    users.kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "DONE!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users.kidneys.length; i++) {
        users.kidneys[i].healthy = true
    }
    res.json({
        msg: "ok"
    })
})

// removing all the unhealthy kidneys
app.delete("/", function (req, res) {
    const newKidneys = [];
    for (let i = 0; i < users.kidneys.length; i++) {
        if (users.kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }

    }
    users.kidneys = newKidneys
    res.json({
        msg: "done"
    })
})
app.listen(3000)


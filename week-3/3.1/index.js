const express = require("express")

const app = express()

// app.get("/health-cheakup", (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.passsword;
//     const kidneyId = req.query.kidneyId

//     if (username != "kishan" && password != "pass") {
//         // Use ur own login here
//         res.status(400).json({ "msg": "something up with ur inputs" })
//         return
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({ "msg": "something up with ur inputs" })
//         return
//     }

//     res.json({
//         msg: "your kidney is fine"
//     })
// })


//  midddlewares are types of joinnig functiona that acts on the output from the server response and tries to modifies it 
// app.get("/health-checkup", function (req, res,next) {
// console.log("hi from 1")
// }, function (req, res) {
// console.log("hello from 2")
// })




app.listen(3000)
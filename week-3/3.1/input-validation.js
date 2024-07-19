// const express = require("express")

// const app = express();

// app.use(express.json())

// app.get("/health-checkup", (req, res) => {
//     const kidneys = req.body.kidneys;
//     const kidneysLength = kidneys.length;

//     res.send(`you have ` + kidneysLength + `kideys`)
// })

// app.listen(3000)



// Zod validation checks

const express = require("express")
const zod = require("zod")
const app = express()

const schema = zod.array(zod.number())

app.use(express.json())


// app.post("/health-checkup", (req, res) => {
//     const kidenys = req.body.kidenys
//     const response = schema.safeParse(kidenys)

//     res.send({
//         response
//     })
// })

// app.listen(3000)


function validationInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response)
} 

validationInput({
    email: "kishan@gmail.comm",
    password: "235fdsff4"
})

// Valdation in an http request in 
app.get("/loginjs", (req, res) => {
    const response = validationInput(req.obj)
    if (!response.success) {
        res.json({
            msg: "not valid input"
        })
        return
    }
})
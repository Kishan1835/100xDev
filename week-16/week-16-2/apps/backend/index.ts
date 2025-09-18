import express from 'express';
const app = express()
const port = 3002;

app.get("/", (req: any, res: any): any => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
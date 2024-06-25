//


// var g = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve("foo")
//     }, 1000)
// })

// function callback() {
//     console.log(g)
// }

// console.log(g)
// g.then(callback)


let fs = require("fs")

fs.readFile("a.txt", function (err, data) {
    if (err) {
        console.log("error")
    }
    let newdata = data.toString().trim() + "hello kishan"
    console.log(newdata)
    fs.writeFile("a.txt", newdata, function (err) {
        if (err) {
            console.log("some error ")
        }
        console.log("success")
    })
})

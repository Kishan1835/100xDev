//


var g = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("foo")
    }, 1000)
})

function callback() {
    console.log(g)
}

console.log(g)
g.then(callback)
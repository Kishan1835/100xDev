const jwt = require("jsonwebtoken")

// decode , verfiy and genarate tokens

const value = {
    name: "jason",
    accountnumber: 324234234
}

//jwt


const token = jwt.sign(value, "kishan")


const verifiedtoken = jwt.verify(token, "kishan")
console.log(verifiedtoken)
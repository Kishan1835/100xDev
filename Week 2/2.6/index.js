// Map, And Filters
// Given an array, give me back an array in which evey value is multiplied by 2

const input = [1, 2, 3, 4, 5, 6, 7, 8]

// Solution One for the above problem
// const newArray = []

// for (let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 3)
// }
// console.log(newArray)



// Other solution
// function transform(i) {
//     return i * 2
// }

const ans = input.map(function (i) {
    return i * 2
})
console.log(ans)

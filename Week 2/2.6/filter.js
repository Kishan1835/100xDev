// Filtering
// what i si tell u, given a input array , give back all the even values form it
const arr = [1, 3, 16, 27, 4, 6, 80]

// Solution One
// const newArray = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArray.push(arr[i])
//     }
// }

// console.log(newArray)


// Filter Function 


const ans = arr.filter((n) => {
    if (n % 2 == 0) {
        return true
    }
    else { 
        return false
    }
})
console.log(ans)
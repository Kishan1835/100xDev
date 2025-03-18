"use strict";
// explicit Type that this X is an number
// let x: number = 102;
// console.log(x);
//// assigning the type of the variable
// function greet(firstname: string) {
//     console.log("hello " + firstname)
// }
// greet("shayam")
// Type inference that means that t-script auto identofy the return type also based on the inpout
// explicit making it return an particular type (eg: string, any, number)(:number)
function sum(a, b) {
    return (a + b);
}
console.log(sum(2, 3));
function isLegal(age) {
    return age >= 18 ? true : false;
}
console.log(isLegal(18));
// explicitly pass an function to another fucntion
function one(two) {
    setTimeout(two, 1000);
}
function bye() {
    console.log("from two");
    function fhs() {
        console.log("hello");
    }
    fhs();
}
one(bye);

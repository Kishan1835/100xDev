// explicit Type that this X is an number
// let x: number = 102;
// console.log(x);

import { string } from "zod"


//// assigning the type of the variable
// function greet(firstname: string) {
//     console.log("hello " + firstname)
// }
// greet("shayam")


// Type inference that means that t-script auto identify the return type also based on the inpout
// explicit making it return an particular type (eg: string, any, number)(:number)
// function sum(a: number, b: number): number {
//     return (a + b)
// }
// console.log(sum(2, 3));

// function isLegal(age: number): boolean {
//     return age >= 18 ? true : false;
// }
// console.log(isLegal(18))


// explicitly pass an function to another fucntion
// function one(two: () => void) {

//     setTimeout(two, 1000);
// }

// function bye() {
//     console.log("from two");
//     function fhs() {
//         console.log("hello")
//     }
//     fhs();
// }

// one(bye);


// Interfaces

interface Users {
    firstName: String
    LastName: String
    Age: number
    email?: string // ? it indicate user can provide or not provide optionally
}

function isLegal(Users: Users) {
    return Users.Age >= 18 ? true : false
}


console.log(isLegal({
    firstName: "Kishan",
    LastName: "T S",
    Age: 21,
}))


// Unions
// you wnat to print an id of an user that can be either number or an string 
// chaining also works (number |strings)
function greet(ud: (number | string)) {

}
greet(1)
greet("1")

// here we can specifiy multiple types of a single variable using the type


// intersection

// type Employees = {
//     name: string;
//     startDate: Date
// }

// interface Manager {
//     name: string;
//     department: string

// }

// type TeachLead = Employees & Manager;
// const t: TeachLead = {
//     name: "kishan",
//     startDate: new Date(),
//     department: "DevOps",

// }
// console.log(t)
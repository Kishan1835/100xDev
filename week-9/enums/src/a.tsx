
// enum Direction {
//     Up="up",
//     Down="down",
//     Left="left",
//     Right="right"
// }
// function doSomething(keyPressed: Direction) {
//     // do something
//     if (keyPressed == Direction.Up) {

import { input } from "zod";

    
// }
// }

// doSomething(Direction.Up);
// doSomething(Direction.Down);
// console.log(Direction.Down);
// console.log(Direction.Up);

// doSomething("pressDown");
// as the keyInputs as set the types any other tyes can't be entered
// enumetrator these are limited set of inputs to a specific functions

// type Input = number |string ;
function firstEl<T>(arr: T[]):T {
    return arr[0]
}
const vale = firstEl(["kishan", "TS"])
console.log((vale.toUpperCase())); // problem here is that ist don't understand the if the vale if string or a number so covergence become difficult

// to make it work we have something called as Generics

// function indentity<T>(arg: T): T{
//     // this same as in c++ STL generics where are specifing the vlues ahead rather we let the user enter and the compiler decide whether if the give value type 
//     return arg;
// }

// let output = indentity<string>("myScreen");
// let output2= indentity<number>(100)
// // Thus 2 version sof the functions
// // let to make multiple variation of an funtion
// output.toUpperCase();
// console.log(output)
// console.log(output2);

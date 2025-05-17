"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something
    if (keyPressed == Direction.Up) {
    }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Down);
console.log(Direction.Up);
// doSomething("pressDown");
// as the keyInputs as set the types any other tyes can't be entered 
// enumetrator these are limited set of inputs to a specific functions

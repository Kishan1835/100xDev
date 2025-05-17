
enum Direction {
    Up,
    Down,
    Left,
    Right
}
function doSomething(keyPressed: Direction) {
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
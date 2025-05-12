
type keyInput = "up" | "down" | "right" | "left";

function doSomething(keyPressed: keyInput) {
    // do something
    console.log("done");
    
}

doSomething("up");
doSomething("down");
// doSomething("pressDown");
// as the keyInputs as set the types any other tyes can't be entered 
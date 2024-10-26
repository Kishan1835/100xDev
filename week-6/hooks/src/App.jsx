import { useState } from "react";


function App() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    let count = 0;
    for (let i = 1; i <= Number(inputValue); i++) {
        count = count +i;
    }

    return <div>
        <input
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={"Find the sum from 1 to n"}
        />
        <br />
        Sum from 1 to {inputValue} is {count}
        <br />
        <button onClick={incrementCounter}>
            <b>new counter {counter}</b>
        </button>
    </div>

}

export default App;

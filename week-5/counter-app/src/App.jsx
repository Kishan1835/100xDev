// hook
import { useState } from "react";

// jsx == not html
function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to Gym 7-9",
    commpleted: false

  }, {
    title: "Study DSA",
    description: "Striver A2Z",
    commpleted: false
  },
  {
    title: "Study Syaytem desgine",
    description: "Prpit bhayani ",
    commpleted: false
  }]);


  function addTodos() {
    setTodos([...todos, {
      title: "added a new todos",
      description: "new todos",
    }])
  }
  return (
    <div>
      <button onClick={addTodos}> add a random todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}


    </div >

  );

  // component 
  function Todo(props) {

    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    );
  }
}

export default App;
import { useState, useEffect } from "react";

function App() {
  const [todos, setData] = useState([])

  useEffect(() => {

    const Datamine = () => {

      setInterval(async () => {
        try {
          const response = await fetch("http://localhost:8080/todos")
          const answer = await response.json()
          setData(answer)
        } catch (error) {
          console.log("The backend is Down Current we will we online soon", error)
        }

      }, 1000);
    }
    Datamine()
  }, [])

  return (
    <div>
      {todos.map(function (todo) {
        return <TodoComp key={todo.key} title={todo.title} description={todo.description} />
      })}
    </div>
  )

  function TodoComp({ title, description }) {
    return (
      <div>
        <h1> title : {title}</h1>
        <h4>Description:{description}</h4>
      </div>
    )
  }

}
export default App
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  return (
    <div>
      <Todo id={3} />
      <Todo id={4} />

      <Todo id={2} />

    </div>
  );
}
function Todo({ id }) {
  const [todo, setTodo] = useState({ title: "", description: "" })

  useEffect(() => {
    
    axios.get("http://localhost:8080/todo?id=" + id)
      .then(function (response) {
        setTodo(response.data.todo)
      })
      .catch((error) => {
        console.log("there is an erroe in fetching ", error)
      })


  }, [id])


  return (
    <div>
      <h1 style={{ backgroundColor: 'lightgray', padding: '10px' }}>
        {todo.title || 'Loading title...'}
      </h1>
      <h3 style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        {todo.description || 'Loading description...'}
      </h3>
    </div>
  )
}

export default App
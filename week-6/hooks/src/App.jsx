import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [newI, setId] = useState("1")

    function changePage(event) {
        const buttonValue = event.target.innerHTML
        setId(buttonValue)
    }
    return (
        <div>
            <button style={{ background: "red" }} onClick={changePage}>1</button>
            <button onClick={changePage}>2</button>
            <button onClick={changePage}>3</button>
            <button onClick={changePage}>4</button>

            <Todo id={newI}></Todo>
        </div>
    );
}

function Todo({ id }) {
    const [todo, setTodo] = useState({ title: '', description: '' })

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
            Id:{id}
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
        </div>
    )
}

export default App 
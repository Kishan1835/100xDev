import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/todos")
            .then(function (response) {
                setTodos(response.data);
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            {todos.map(todo => {
                return <Todo key={todo.id} title={todo.title} description={todo.description} />
            })}
        </div>
    );
};

function Todo({ title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    );
}

export default App;
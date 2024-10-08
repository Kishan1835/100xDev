import { useState } from "react"


export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>

        <input style={{
            padding: 10,
            margin: 10
        }} type="text" id="title" placeholder="Title"
            onChange={function (e) {
                setTitle(e.target.value)
                console.log(e.target.value)
            }} />
        <br />

        <input style={{
            padding: 10,
            margin: 10
        }} type="text" id="desc" placeholder="Description"
            onChange={function (e) {
                setDescription(e.target.value);
                console.log(e.target.value);
            }} />

        <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            })
                .then(async (res) => {
                    const json = await res.json();
                    alert("Todo added");
                })
               

        }}>Add a Todo</button>
    </div>
}


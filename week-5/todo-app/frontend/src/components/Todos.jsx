
// todos = [
// todo 1{ title:"gibresh", description:"fsgsdf"}
// todo 2 
// todo 3
// So basically we are using OBJECT Destructuring as we will get the todos in a array format]

export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo) {
                return (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
                    </div>
                );
            })}
        </div>
    )

}
import './App.css'
function App() {
  return (
    <>
      <Todo
        title="Go to Gym"
        description="daily routine"
        done={false}
      />
    </>
  )
}

// interface TodoProp{
//   title: string,
//   description: string,
//   done:boolean
// }

function Todo(props:TodoProp) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.done}</h3>
  </div>
}
export default App

import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todoAtomFamily } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <TodoComponet id={2} />
      <TodoComponet id={4} />
      <TodoComponet id={4} />
      <TodoComponet id={4} />
      <TodoComponet id={4} />
      <TodoComponet id={4} />
    </RecoilRoot>
  )
}


function TodoComponet({ id }) {
  const todo = useRecoilValue(todoAtomFamily(id))

  return (
    <div>
      {todo.title} - {todo.description} - {todo.complete ? "Done" : "Pending"}
    </div>
  )
}

export default App

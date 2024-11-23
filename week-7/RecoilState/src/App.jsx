import { useContext } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./strore/atoms/count";


function App() {

  return (
    <div>
      <RecoilRoot>
        <Count /> 
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  const isEven = useRecoilValue(evenSelector)
  return <div>
    <b> {count}</b>
    {isEven % 2 === 0 && <div>IT IS EVEN</div>}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App

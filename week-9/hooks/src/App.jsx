import { useDebugValue, useEffect, useState } from "react"


function useDebounce(inputvalue, timeout) {
  const [dedouncedvalue, setDebouncedvalue] = useState()
  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedvalue(inputvalue)
    }, timeout)

    return () => {
      clearTimeout(timeoutNumber)
    }

  }, [inputvalue])
  return dedouncedvalue
}


function App() {
  const [inputvalue, setInputvalue] = useState(0)
  const debouncedValue = useDebounce(inputvalue, 500)

  return (
    <>
      devounced value is {debouncedValue}
      <input type="text" onChange={e => setInputvalue(e.target.value)} />
    </>
  )
}



export default App
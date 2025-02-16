import { Component, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [render, setRender] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r)
    }, 5000)
  }, [])

  return (
    <>
      {render ? <Mycomponent /> : <div>this is not the corect syntax</div>}
    </>
  )
}

function Mycomponent() {
  useEffect(() => {
    console.log("compoent mounted")
    return () => {
      console.log("componet unmounted")
    }
  }, [])
  return (
    <>
      from inside my compoents
    </>
  )

}

export default App

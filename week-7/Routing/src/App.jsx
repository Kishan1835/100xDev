import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  return (
    < div >
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={'loading...'}>
          <Routes >
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Suspense>

      </BrowserRouter>
    </div >


  )
}

function Appbar() {
  let navigate = useNavigate()

  return <div>
    <div >
      <button onClick={() => {
        navigate("/")
      }}> Landing
      </button>
      <button onClick={() => {
        navigate("/Dashboard")
      }}>Dashboard
      </button>
    </div>
  </div>
}

export default App

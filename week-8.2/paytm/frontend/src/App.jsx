import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import SignIn from "./pages/Signin"
import Send from "./pages/send"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <>
      <Routes  >
        <Route path="/signup" element={<Signup />}> </Route>
        <Route path="/signin" element={<SignIn />}> </Route>
        <Route path="/send" element={<Send />}> </Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
      </Routes>
    </>

  )
}

export default App

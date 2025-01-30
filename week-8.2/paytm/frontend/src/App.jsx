import { Route, Routes } from "react-router-dom"
import Signup from "./component/signup"
import SignIn from "./component/Signin"
import Send from "./component/send"
import Dashboard from "./component/dashboard"
import Home from "./component/Home"

function App() {

  return (
    <Routes  >
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />}> first</Route>
      <Route path="/signin" element={<SignIn />}> first</Route>
      <Route path="/send" element={<Send />}> first</Route>
      <Route path="/dashboard" element={<Dashboard />}> first</Route>
      sdasdas
    </Routes>
  )
}

export default App

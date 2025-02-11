import React, { useState } from 'react'
import axios from 'axios'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/inputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const signup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className=" bg-slate-300 h-screen flex justify-center" >
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-96 text-center p-7 h-max px-7 ">
          <Heading lable={"Sign Up"} className="pt-2 pb-2" />
          <Subheading lable={"Enter your information to create an account"} />
          <InputBox onChange={e => {
            setFirstName(e.target.value)
          }} placeholder="john" lable={"First Name"} />
          <InputBox onChange={e => {
            setLastName(e.target.value)
          }} placeholder="Doe" lable={"Last Name"} />
          <InputBox onChange={e => {
            setUserName(e.target.value)
          }} placeholder="Kishan.200@gmail.com" lable={"Email"} />
          <InputBox onChange={e => {
            setPassword(e.target.value)
          }} placeholder="123456" lable={"Password"} />
          <div className='pt-4'>
            <Button lable={"Sign Up"}
              onClick={() => {
                axios.post("http://localhost:3000/api/v1/user/signup", {
                  username,
                  firstName,
                  lastName,
                  password
                })
                  .then(response => {
                    // Handle success
                    console.log(response.data);
                  })
                  .catch(error => {
                    // Handle error
                    if (error.response) {
                      console.error("Error:", error.response.data.message);
                    } else {
                      console.error("There was an error!", error.message);
                    }
                  });
              }} />
          </div>
          <BottomWarning lable={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
        </div>
      </div>
    </div>

  )
}

export default signup
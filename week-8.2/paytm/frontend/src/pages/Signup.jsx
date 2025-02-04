import React from 'react'
import Heading from '../components/Heading '
import Subheading from '../components/Subheading'
import InputBox from '../components/inputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const signup = () => {
  return (
    <div className="font-bold text-4xl pt-6" >
      <Heading lable={"Sign Up"} />
      <Subheading lable={"Enter your information to create an account"} />
      <InputBox placeholder="john" lable={"First Name"} />
      <InputBox placeholder="Doe" lable={"Last Name"} />
      <InputBox placeholder="Kishan.200@gmail.com" lable={"Email"} />
      <InputBox placeholder="123456" lable={"Password"} />
      <div className='pt-4'>
        <Button lable={"Sign Up"} />
      </div>

      <BottomWarning lable={"Already have an account?"} button={"Sign In"} />
    </div>

  )
}

export default signup
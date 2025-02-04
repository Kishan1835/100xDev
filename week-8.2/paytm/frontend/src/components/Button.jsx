import React from 'react'

const Button = ({ lable }) => {
    return (
        <div className='pt-6 '>
            <button className=' w-full bg-black rounded-lg text-sm text-white flex justify-center p-3 cursor-pointer'>
                {lable}
            </button>
        </div>
    ) 
}

export default Button
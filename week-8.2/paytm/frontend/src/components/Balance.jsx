import React from 'react'

const Balance = ({ value }) => {
    return <div className='flex'>
        <div className='font-bold text-lg'>
            Your balance
        </div>
        <div className='font-semibold ml-4 textt-lg'>
            {value}
        </div>
    </div>
}
export default Balance
import React from 'react'

export const Buttons = ({ onChange }) => {
  return (
    <>
    <div className='absolute inset-0 top-10 right-10 flex justify-center items-center space-x-2 '>
        <button style={{ backgroundColor: '#e91e63' }} className='rounded p-2 m-2 text-white' onClick={onChange}>Dive into Scene </button>
        
        <button  className='rounded p-2 m-2 bg-transparent border-2 border-white text-white' >Open Projects</button>
    </div>
    </>
  )
}
import React from 'react'

export const Buttons = ({ onChange,onprojectclick }) => {
  return (
    <>
    <div className='absolute inset-0 top-10 right-10 flex justify-center items-center text-xl space-x-2 '>
        <button style={{ backgroundColor: '#F6AC17' }} className='rounded border-2 p-2 m-4 text-white' onClick={onChange}>Dive into Scene </button>
        
        <button onClick={onprojectclick} className='rounded p-2 m-4 bg-transparent border-2 border-white text-white' >Open Projects</button>
    </div>
    </>
  )
}
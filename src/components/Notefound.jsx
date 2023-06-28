import React from 'react'
import notFoundPic from '../assets/notfound.jpg'
const Notefound = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      
      <img className='w-full h-full' src={notFoundPic} alt="" />
      
    </div>
  )
}

export default Notefound
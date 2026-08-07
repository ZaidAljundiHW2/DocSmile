import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const HeaderFull = () => {
  return (
    <div
        className='
            fixed
            z-100
            w-full
        '
    >

        <Header />
        <Navbar />
        
    </div>
  )
}

export default HeaderFull
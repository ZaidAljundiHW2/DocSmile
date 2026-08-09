import React from 'react'
import GeneralInfo from './GeneralInfo'
import Navbar from './Navbar'

const HeaderFull = () => {
  return (
    <div
        className='
            sticky
            top-0
            z-100
            w-full
        '
    >

        <GeneralInfo />
        <Navbar />
        
    </div>
  )
}

export default HeaderFull
"use client"
import React, { useRef, useLayoutEffect, useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'

const HeaderFull = () => {
  

  
  

  return (
    <div ref={headerRef} className="fixed top-0 z-[500] w-full">
      {/* <div
        className='
          hidden
          md:block
          
        '
      >
        <GeneralInfo />
      </div> */}
      
      <Navbar />
    </div>
  )
}

export default HeaderFull
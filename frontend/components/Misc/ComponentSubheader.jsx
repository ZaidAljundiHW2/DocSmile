import React from 'react'
import { resolveImg } from '@/utils/resolveImg'

const ComponentSubheader = ({heading}) => {
  return (
    <div
        style={{
            ImageBackground:`url(${resolveImg('/img/Backgrounds/UCTAback.jpg')})`,
            padding:'20px',
            backgroundSize:"100% 100%",

        }}

        className='
            items-center
        '
    >

        <h1 
            className='
                main_header
            ' 
            style={{
                color:'white',
                fontSize:'clamp(2rem, 8vw, 10rem)'
            }}
        >
            {heading}
        </h1>
        
    </div>
  )
}

export default ComponentSubheader
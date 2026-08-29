import React from 'react'

const OurMission = ({ mission } : { mission : string }) => {
  return (
    <div
        className='
            flex
            justify-center
            items-center
            p-10
            bg-white
            flex-col
            gap-5
            text-center
        '
    >

        <h1
            className='
                main_header
            '
            style={{
                color:'black'
            }}
        >
            Our Mission
        </h1>

        <h2
            className='
                secondary_header
            '
        >
            {mission}
        </h2>
        
    </div>
  )
}

export default OurMission
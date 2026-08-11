import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

const DoctorGrid = () => {
  return (
    <div
        className='
            bg-white
            flex
            justify-center
            items-center
            p-10
            flex-col
            gap-5
        '
    >
        <h2
            className='
                secondary_header
            '
            style={{
                color:'black',
                borderWidth:'0px 0px 5px 0px',
                borderColor:'#071f97'
            }}
        >
            Dentists
        </h2>

        <Flex
            className='
                w-[80%]
            '
        >
             
        </Flex>
        
    </div>
  )
}

export default DoctorGrid
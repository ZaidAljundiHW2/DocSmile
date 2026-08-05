import React from 'react'
import { resolveImg } from '@/utils/resolveImg'
import { Flex, Button } from '@chakra-ui/react'

const DoctorCard = ({doctor={}, isMiddleDoc=false, isFillerCard=false}) => {
  return (
    <div
        className='
            
            items-end
            flex
            overflow-hidden
            rounded-lg
            w-full
            bg-clip-padding
        '
        style={{
            backgroundImage: isFillerCard ? "" : `url(${resolveImg(doctor.img)})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            border: isFillerCard ? "" : '5px solid #071f97',
            height:'100%',
            scale: isMiddleDoc ? '100%' : '90%'
        }}
    >

        {isFillerCard ? (

                <div />

            )

            :

            (
                <Flex
                    className='
                        bg-[#071f97]
                        items-center
                        justify-center
                        flex-col
                        w-full
                    '
                    style={{
                        padding:'20px'
                    }}
                >

                    <h2 className='secondary_header'>
                        {doctor.name}
                    </h2>

                    <p className='main_text'>
                        {doctor.title}
                    </p>

                    <p className='main_text'>
                        {doctor.specialty}
                    </p>

                    <p className='main_text'>
                        View More
                    </p>


                </Flex>

            )
        }
        

        
    </div>
  )
}

export default DoctorCard
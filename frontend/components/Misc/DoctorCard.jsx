import React from 'react'
import { Flex } from '@chakra-ui/react'

const DoctorCard = ({ doctor = {}, isMiddleDoc = false, isFillerCard = false }) => {
    return (
        <div
            className='
                flex
                rounded-lg
                w-full
                h-full
                transition-transform
                duration-300
                overflow-hidden
                md:text-start
                text-center
                
                
            '
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: isFillerCard ? '' : '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                cursor: isFillerCard ? 'default' : 'pointer',
                
                transform: isMiddleDoc ? 'scale(1)' : 'scale(0.9)',
                zIndex: isMiddleDoc ? 10 : 1
            }}
        >

            {isFillerCard ? (

                <div />

            ) : (

                
                
                <Flex
                    className='
                        flex-col
                        rounded-lg
                    '
                >
                    <img src={doctor.img}/>

                    <Flex
                        className='
                            bg-white
                            items-center
                            justify-center
                            flex-col
                            w-full
                            md:p-5
                            p-2
                        '
                        style={{
                            color:'black'
                        }}
                    >

                        <h2 
                            className='
                                secondary_header
                            ' 
                            style={{
                                color:'black', 
                                fontWeight:'bold',
                                
                            }}
                        >
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

                </Flex>
                    
                

            )}

        </div>
    )
}

export default DoctorCard
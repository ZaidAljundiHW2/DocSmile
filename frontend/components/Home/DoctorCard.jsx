import React from 'react'
import { Flex } from '@chakra-ui/react'

const DoctorCard = ({ doctor = {}, isMiddleDoc = false, isFillerCard = false }) => {
    return (
        <div
            className='
                items-end
                flex
                overflow-hidden
                rounded-lg
                w-full
                bg-clip-padding
                transition-transform
                duration-300
            '
            style={{
                backgroundImage: isFillerCard ? "" : `url(${doctor.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: isFillerCard ? "" : '5px solid #071f97',
                height: '100%',
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
                        bg-[#071f97]
                        items-center
                        justify-center
                        flex-col
                        w-full
                    '
                    style={{
                        padding: '20px'
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

            )}

        </div>
    )
}

export default DoctorCard
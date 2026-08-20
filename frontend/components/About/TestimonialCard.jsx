import React from 'react'
import { Flex, Button } from '@chakra-ui/react'

const TestimonialCard = ({ test = {} }) => {
    return (
        <div
            className='
                flex
                rounded-lg
                scale-90
                hover:scale-100
                transition-transform
                duration-300
                overflow-hidden
                
            '
            style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
        >
            <Flex
                className='
                    rounded-lg
                    w-full
                    h-full
                '
                direction={{ base: 'column', md: 'row' }}
            >
                <img
                    src={test.testimonialimg}
                    alt={test.name || 'Testimonial'}
                    className='
                        w-full
                        md:w-2/5
                    '
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        flexShrink: 0,
                    }}
                />

                <Flex
                    className='
                        bg-white
                        items-center
                        justify-center
                        flex-col
                        w-full
                        p-5
                        overflow-hidden
                        gap-2
                    '
                    style={{
                        color: 'black',
                    }}
                >
                    <h2
                        className='
                            secondary_header
                            line-clamp-1
                            text-center
                        '
                        style={{
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                    >
                        {test.name}
                    </h2>

                    <p className='main_text line-clamp-2 text-center'>
                        {test.testimonial?.slice(0, 50)}...
                    </p>

                    <p className='main_text'>
                        {test.date}
                    </p>

                    <Button
                        className='
                            button
                        '

                        style={{
                            "--button-bg": "#071f97",
                            alignSelf:'center'
                        }}
                    >
                        Read More

                    </Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default TestimonialCard
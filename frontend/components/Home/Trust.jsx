import React from 'react'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'

const Trust = () => {

    const TrustJSON = [
        {
            "name":"Coordinated Team",
            "img": "/icons/webp.png"
        },
        
        {
            "name":"Bilingual Communication",
            "img": "/icons/webp.png"
        },

        {
            "name":"Accessible Location",
            "img": "/icons/webp.png"
        },

        {
            "name":"Patient-Contact Support",
            "img": "/icons/webp.png"
        }
    ]
    
  return (
    <div
        className='
            bg-[#CCE0FF]
            p-5
        '
        
    >

        <SimpleGrid
            columns={{base:2, md:4}}
            gap={{base:2, md:5}}
        >

            {TrustJSON.map((trust,i) => (

                <Flex
                    className='
                        flex-col
                        rounded-lg
                        shadow-lg
                        justify-start
                        items-center
                        text-center
                    '
                    key={i}

                    style={{
                        padding:'20px',
                        backgroundColor: i % 2 == 0 ? '#071f97' : 'white'
                    }}
                >

                    <img 
                        src={trust.img}
                        alt={trust.name}
                        className='
                            rounded-full
                            aspect-square
                            md:w-[100px]
                            w-[50px]
                            
                        '

                        
                    />

                    <h1 
                        className='
                            secondary_header
                        ' 
                        style={{
                            color: i % 2 == 0 ? 'white' : '#071f97',
                            fontWeight:'bold'
                        }}
                    >
                        {trust.name}
                    </h1>

                </Flex>
            ))}


        </SimpleGrid>

        
        
    </div>
  )
}

export default Trust
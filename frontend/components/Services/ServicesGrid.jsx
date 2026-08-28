"use client"
import { Flex, SimpleGrid, Box } from '@chakra-ui/react'
import ServicesJSON from '@/assets/JSONs/services.json'
import Link from 'next/link'

const ServicesGrid = ({ services }) => {


  return (
    <div
        className='
            w-full
            bg-white
            flex
            justify-center
            items-center
            flex-col
        '
        style={{padding:'20px'}}
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
            Services
        </h2>


        <SimpleGrid
            columns={{base:2, md:3}}
            className='w-full'
        >
            {services.map((item,i) => (

                <Link 
                    key={i}
                    href={`/Services/${item.slug}`}
                >
                    <Flex
                        className='
                            items-center
                            justify-center
                            relative
                            aspect-square
                            scale-90
                            hover:scale-100
                            transition-transform
                            duration-300
                            cursor-pointer
                            text-center
                            p-4
                        '
                    >
                        <img 
                            src={(item.image.url)}
                            alt={item.name}
                            className='
                                absolute
                                inset-0
                                w-full
                                h-full
                                z-0
                            '
                        />

                        {/* dark layer */}
                        <Box 
                            className='
                                absolute
                                inset-0
                                bg-black/70
                                z-1
                            '
                        />

                        <h1
                            className='
                                main_header
                                z-2
                            '
                            style={{
                                color:'white'
                            }}
                        >
                            {item.name}

                        </h1>

                    </Flex>
                </Link>

            ))}
            

        </SimpleGrid>
        
    </div>
  )
}

export default ServicesGrid
import React from 'react'
import { Flex } from '@chakra-ui/react'
import TestimonialJSON from '@/assets/JSONs/testimonials.json'
import Link from 'next/link'

interface TestimonialContent {
    testimonialid: number,
    slug: string,
    name: string,
    date: string,
    profileimg: string,
    testimonialimg: string,
    testimonial: string,
}

interface TestimonialTemplateProps {
    test: TestimonialContent,
    collection: number[]
}

const TestimonialTemplate = ({ test, collection } : TestimonialTemplateProps) => {

    const collectionTests = TestimonialJSON.filter(item => item.testimonialid in collection);

  return (
    <div
        className='
            bg-white
            md:p-10
            p-5
            flex
            md:flex-row
            flex-col
            gap-5
            
        '
    >

        <Flex
            className='
                md:w-2/3
                w-full
                
                flex-col
                gap-5
            '
        >
            <Flex className='w-full items-center'>

            
                <h1
                    className='
                        main_header
                    '
                    style={{
                        color:'black'
                    }}
                >
                    {test.name}
                </h1>

                <img 
                    src={test.profileimg}
                    className='
                        rounded-full
                        ml-auto
                        h-[100px]
                        rounded-full
                    '
                />
            </Flex>
            
            <Flex
                gap={5}
                direction={{
                    base:'column',
                    md:'row'
                }}
                    
                
            >
                <img 
                    src={test.testimonialimg}
                    className='
                        w-[400px]
                        h-auto
                    '
                />

                <Flex
                    className='
                        flex-col
                    '
                >
                    <p
                        style={{color:'black'}}
                    >
                        {test.date}
                    </p>

                    <p
                        style={{color:'black'}}
                    >
                        {test.testimonial}
                    </p>
                </Flex>

            </Flex>
            



        </Flex>
        
        {/* select */}
        <Flex className='divide-y-2 divide-gray-200 flex-col md:ml-auto md:h-full h-[150px] overflow-y-scroll'>

            {collectionTests.map((item,i) => (
                
                <Link
                    key={i}
                    href={`/About/Patient-Experience/${item.slug}`}
                
                >
                
                    <Flex
                        className='
                            p-2
                            items-center
                            gap-5
                        '
                    >
                        <img 
                            src={item.testimonialimg}
                            className='
                                h-[100px]
                                w-[100px]
                            '
                        />

                        <Flex
                            style={{
                                color:'black'
                            }}
                            className='
                                flex-col
                            '
                        >
                            <p className='font-bold'>
                                {item.name}
                            </p>

                            <p>
                                {item.testimonial.slice(0,20)} ...
                            </p>
                        </Flex>
                    
                    </Flex>
                </Link>

            ))}



        </Flex>
        
    </div>
  )
}

export default TestimonialTemplate
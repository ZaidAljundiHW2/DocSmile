import React from 'react'
import { Flex } from '@chakra-ui/react'
import './PatientInformation.css'

const FirstVisit = ({ text } : { text : string }) => {

    const paragraphs = text.split('\n');

  return (
    <div
        className='
            patientinformationcontainer
            
            md:p-10
            p-5
            md:text-start
            text-center
        '
    >

        <Flex
            className='
                gap-5
                md:flex-row
                flex-col
            '
        >

            {/* content */}
            <Flex
                className='
                    flex-col
                    flex-1
                    gap-5
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
                    Your First Visit
                </h1>
                
                <Flex
                    className='
                        gap-5
                        flex-col
                    '
                >
                    {paragraphs.map((item,i) => (
                        <p
                            key={i}
                        >
                            {item}

                        </p>
                    ))}

                

                </Flex>
                

            </Flex>

            {/* image */}
            <Flex
                className='
                    md:w-1/3
                    w-full
                    max-w-[250px]
                    mx-auto
                    md:max-w-none
                    md:mx-0
                    aspect-square
                    md:self-start
                    relative
                    items-center
                    justify-center
                '
            >
                <img 
                    src={'/img/dentistandpatient.avif'}
                    alt='Dentist with patient'
                    loading='lazy'
                    className='
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        rounded-full
                    '
                />

            </Flex>

        </Flex>
        
    </div>
  )
}

export default FirstVisit
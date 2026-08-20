import React from 'react'
import { Flex } from '@chakra-ui/react'

interface ServiceAltItem {
    header:string,
    subheader:string,
    img:string
}

interface ServiceAltContent {
    section:string,
    header:string,
    alternatives: ServiceAltItem[]
}

interface ServiceAltProps {
    ServiceAltObj: ServiceAltContent
}

const ServiceAlts = ({ ServiceAltObj } : ServiceAltProps) => {
  return (
    <div
        className='
            servicecontainer
            md:p-10
			p-5
            flex-col
            gap-5
            md:text-start
            text-center
        '
    >
        <Flex className='flex-col'>
            <h2
                className='
                    secondary_header
                '
            >
                {ServiceAltObj.section}

            </h2>
            <h1
                className='
                    main_header
                '
                style={{
                    color:'black'
                }}
            >
                {ServiceAltObj.header}
            </h1>

        </Flex>
        
        <Flex className='w-full justify-center items-center'>
            <Flex className='flex-col w-full md:w-2/3 gap-8 md:gap-5'>

                {ServiceAltObj.alternatives.map((item,i) => (

                    <Flex
                        key={i}
                        className='
                            items-center
                            justify-center
                            flex-col
                            md:flex-row
                            gap-5
                        '
                    >

                        <Flex
                            className={`
                                flex-col
                                flex-1
                                min-w-0
                                order-2
                                ${i % 2 == 0 ? 'md:order-1' : 'md:order-2'}
                            `}
                        >
                            <h2
                                className='
                                    secondary_header
                                '
                                style={{
                                    color:'black',
                                    fontWeight:'bold'
                                }}
                            >
                                {item.header}

                            </h2>

                            <p>
                                {item.subheader}
                            </p>

                        </Flex>

                        <img 
                            src={item.img} 
                            alt={item.header}
                            loading='lazy'
                            className={`
                                rounded-lg
                                w-full
                                max-w-[250px]
                                h-auto
                                order-1
                                ${i % 2 == 0 ? 'md:order-2' : 'md:order-1'}
                            `}
                        />

                    </Flex>
                ))}

            </Flex>

        </Flex>
        
        
        
    </div>
  )
}

export default ServiceAlts
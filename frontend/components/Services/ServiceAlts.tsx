import React from 'react'
import { Flex } from '@chakra-ui/react'
import { resolveImg } from '@/utils/resolveImg'

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
            p-10
            flex-col
            gap-5
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
            <Flex className='flex-col w-2/3 gap-5'>

                {ServiceAltObj.alternatives.map((item,i) => (

                    <Flex
                        key={i}
                        className='
                            items-center
                            justify-center
                            gap-5
                        '
                    >

                        <Flex
                            className='
                                flex-col
                            '

                            order={i % 2 == 0 ? 1 : 2}
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
                            src={resolveImg(item.img)} 
                            style={{
                                order: i % 2 == 0 ? 2 : 1,
                                width: '100%',
                                maxWidth: '250px',
                                height: 'auto',
                            }}
                            className='
                                rounded-lg
                            '
                        />

                    </Flex>
                ))}

            </Flex>

        </Flex>
        
        
        
    </div>
  )
}

export default ServiceAlts
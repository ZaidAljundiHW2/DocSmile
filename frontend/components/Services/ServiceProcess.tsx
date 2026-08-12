import React from 'react'
import { Flex } from '@chakra-ui/react'
import { resolveImg } from '@/utils/resolveImg'

interface Step {
    stepnum: number,
    header: string,
    paragraph: string,
    img: string

}

interface ServiceProcessContent {

    section: string,
    header: string,
    subheader: string
    steps: Step[]
}

interface ServiceProcessProps {
    ServiceProcessObj: ServiceProcessContent
}


const ServiceProcess = ({ ServiceProcessObj } : ServiceProcessProps ) => {
  return (
    <div
        className='
            servicecontainer
            p-20
            flex-col
            gap-10
            
        '
    >

        <Flex className='flex-col'>
            <h2 className='secondary_header'>
                {ServiceProcessObj.section}
            </h2>

            <h1 className='main_header' style={{color:'black'}}>
                {ServiceProcessObj.header}
            </h1>

        </Flex>

        <Flex
            className='
                w-full
                flex-col
                md:flex-row
                items-stretch
                gap-5
            '
        >

            {ServiceProcessObj.steps.map((item,i) => (

                <React.Fragment
                    key={i}
                    
                >
                    <Flex
                        className='
                            flex-col
                            items-center
                            text-center
                            flex-1
                            gap-2
                        '
                    >
                        <img 

                            src={resolveImg(item.img)}
                            className='
                                w-16
                                md:w-full
                                aspect-square
                                rounded-lg
                                object-cover
                            '
                        />
                        
                        <span
                            className='secondary_header'
                            style={{ color: '#071f97' }}
                        >
                            {i + 1}
                        </span>

                        
                        

                        <h3 className='text-black font-bold'>
                            {item.header}
                        </h3>

                        <p>
                            {item.paragraph}
                        </p>
                        
                    </Flex>
                    

                </React.Fragment>
            ))}
        </Flex>

        
    </div>
  )
}

export default ServiceProcess
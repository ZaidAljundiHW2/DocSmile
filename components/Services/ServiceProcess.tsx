import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Service } from '@/payload-types'
import { getTranslations } from 'next-intl/server'

const ServiceProcess = async({ service } : { service : Service} ) => {

    const t = await getTranslations('services.serviceTemplate.process');

  return (
    <div
        className='
            servicecontainer
            md:p-10
            p-5
            md:text-start
            text-center
            flex-col
            gap-10
            
        '
    >

        <Flex className='flex-col'>
            <h2 className='secondary_header'>
                {t('header')}
            </h2>

            <h1 className='main_header' style={{color:'black'}}>
                {service.content?.processHeader}
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

            {service.content?.steps.map((item,i) => (

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

                            src={item.image.url}
                            className='
                                w-40
                                md:w-full
                                aspect-square
                                md:rounded-lg
                                rounded-full
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
                            {item.step}
                        </p>
                        
                    </Flex>
                    

                </React.Fragment>
            ))}
        </Flex>

        
    </div>
  )
}

export default ServiceProcess
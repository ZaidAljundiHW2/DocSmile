import React from 'react'
import { Flex } from '@chakra-ui/react'
import { getTranslations } from 'next-intl/server';


const OurLaboratory = async({ text } : { text : string }) => {

    const paragraphs = text.split('\n');

    const t = await getTranslations('about.OurLaboratory');

  return (
    <div
        className='
            bg-white
            flex
            md:flex-row
            flex-col
            md:p-10
            p-5
            gap-5
        '
    >

        <Flex
            className='
                flex-col
                gap-5
                md:w-2/3
                w-full
            '
        >
            <h1
                className='main_header'
                style={{
                    color:'black'
                }}
            >
                {t('header')}
            </h1>

            <Flex
                className='
                    flex-col
                    gap-5
                '
                style={{
                    color:'black'
                }}
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
        
        <Flex className='md:w-1/3 w-full'>
            <img 
                src={'/img/placeholder.jpg'}
                className='object-cover'
                style={{
                    width: '100%',
                    height: 'auto',
                    flexShrink: 0,
                }}
            />

        </Flex>
        

    </div>
  )
}

export default OurLaboratory
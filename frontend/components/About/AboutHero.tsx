import React from 'react'
import { Flex } from '@chakra-ui/react'
import CallButton from '../Misc/CallButton'
import BookButton from '../Misc/BookButton'
import { getTranslations } from 'next-intl/server'

const AboutHero = async() => {

    const t = await getTranslations('about.hero');

  return (
    <div
        className='
            w-full
            md:h-[100vh]
            h-[50vh]
            flex
            relative
            p-10
            bg-red-500
            items-center
            justify-center
        '
    >
        <img 
            src={'/img/Backgrounds/reception.jpg'}
            className='
                inset-0
                absolute
                w-full
                h-full
                z-0
            '
        />

        <img 
            src={'/img/Backgrounds/HeaderBack.jpg'}
            className='
                inset-0
                absolute
                opacity-50
                w-full
                h-full
                z-1
            '
        />

        <Flex
            className='
                z-2
                flex-col
                text-center
                items-center
                justify-center
            '
            gap={5}
        >
            <h1
                className='
                    main_header
                '
                style={{
                    color:'white'
                }}
            >
                {t('header')}
            </h1>

            <h2
                className='
                    secondary_header

                '
                style={{
                    color:'white',
                    fontWeight:'bold'
                }}
            >
                {t('subheader')}

            </h2>

            <Flex gap={5}>
                <CallButton />

                <BookButton />

            </Flex>

        </Flex>
        


        
    </div>
  )
}

export default AboutHero
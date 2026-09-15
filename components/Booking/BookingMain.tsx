import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import ContactOptions from '../Misc/ContactOptions'
import BookingForm from './BookingForm'
import { Doctor } from '@/payload-types'
import { getLocale, getTranslations } from 'next-intl/server'

const BookingMain = async({ doctors, address } : { doctors : Doctor[], address : string }) => {

    const t = await getTranslations('booking');
    const locale = await getLocale();

  return (
    <div
        className='
            flex
            flex-col
            bg-white
        '
    >
        <Flex 
            className={`
                pt-5 
                pb-5 
                md:pt-10
                md:pb-10
                ${locale === 'en' ? 'md:pl-10' : 'md:pr-10'}
                ${locale === 'en' ? 'pl-5' : 'pr-5'} 
                gap-5 
                md:flex-row 
                flex-col
            `}
        >
            <Flex
                className='
                    flex-1
                    relative
                    order-2
                    flex-col
                    gap-5
                    text-center
                '
            >
                <Flex className='flex-1 relative aspect-[4/3] md:aspect-auto'>
                    <img 
                        src={'/img/placeholder.jpg'}
                        alt='Clinic location'
                        loading='lazy'
                        className={`
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            ${locale === 'en' ? 'rounded-l-full' : 'rounded-r-full'}
                        `}
                    />
                </Flex>

                <h1 
                    className='secondary_header' 
                    style={{
                        color:'black', 
                        fontWeight:'bold', 
                        alignSelf:'center', 
                        justifySelf:'center'
                    }}
                >
                    {address}
                </h1>

                <Button
                    className='
                        button
                        w-full
                        md:w-2/3
                    '
                    style={{
                        "--button-bg": "#0071e3",
                        alignSelf:'center', 
                        justifySelf:'center'
                    } as React.CSSProperties}
                >
                    {t('dirHeader')}
                </Button>
            </Flex>

            <Flex
                className='
                    flex-1
                    flex-col
                '
            >
                <div
                    className='
                        p-5
                        rounded-lg
                        shadow-lg
                        bg-[#f7f7f7]
                        flex
                        flex-col
                        w-full
                        h-full
                    '
                >
                    <h2
                        className='secondary_header'
                        style={{
                            color:'black',
                            fontWeight:'bold'
                        }}
                    >
                        {t('header')}
                    </h2>

                    <BookingForm doctors={doctors}/>
                </div>
            </Flex>

        </Flex>

        <ContactOptions />
        
    </div>
  )
}

export default BookingMain
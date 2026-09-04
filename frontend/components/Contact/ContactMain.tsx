import React from 'react'
import { Flex } from '@chakra-ui/react'
import ContactForm from './ContactForm'
import ContactOptions from '../Misc/ContactOptions'
import { Doctor } from '@/payload-types'
import { getTranslations } from 'next-intl/server'

const ContactMain = async({ doctors } : { doctors : Doctor[]}) => {

    const t = await getTranslations('contact');

  return (
    <div
        className='
            flex
            flex-col
            bg-white
        '
    >
        <Flex
            className='
                md:flex-row
                flex-col
                gap-5
            '
        >
            <Flex
                className='
                    relative
                    w-full
                    md:w-1/2
                    aspect-[4/3]
                    md:aspect-auto
                    md:order-1
                    order-2
                '
            >
                <img 
                    src={'/img/placeholder.jpg'}
                    alt='Contact us'
                    loading='lazy'
                    className='
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        md:rounded-r-full
                        md:rounded-t-none
                        rounded-t-full
                    '
                />

            </Flex>

            <Flex
                className='
                    flex-1
                    flex-col
                    md:p-10
                    p-5
                    md:order-2
                    order-1
                '


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
                    {t('header')}
                </h2>

                <ContactForm doctors={doctors}/>

            </Flex>

        </Flex>

        <ContactOptions isEnquire={false}/>
        
    </div>
  )
}

export default ContactMain
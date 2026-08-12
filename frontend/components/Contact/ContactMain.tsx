import React from 'react'
import placeholderimg from '/img/placeholder.jpg'
import { Flex } from '@chakra-ui/react'
import ContactForm from './ContactForm'
import Contact from '../Misc/ContactOptions'

const ContactMain = () => {
  return (
    <div
        className='
            flex
            flex-col
            bg-white
        '
    >
        <Flex>
            <Flex
                className='
                    flex-1
                    relative
                '
            >
                <img 
                    src={'/img/placeholder.jpg'}
                    className='
                        absolute
                        inset-0
                        h-full
                        w-full
                        rounded-r-full
                    '
                />

            </Flex>

            <Flex
                className='
                    flex-1
                    flex-col
                    p-10
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
                    Contact Us
                </h2>

                <ContactForm />

            </Flex>

        </Flex>

        <Contact isEnquire={false}/>
        
    </div>
  )
}

export default ContactMain
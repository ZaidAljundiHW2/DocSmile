import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import ContactOptions from '../Misc/ContactOptions'
import BookingForm from './BookingForm'

const BookingMain = () => {
  return (
    <div
        className='
            flex
            flex-col
            bg-white
        '
    >
        <Flex className='pt-10 pl-10 pb-10 gap-5'>
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
                <Flex className='flex-1 relative'>
                    <img 
                        src={'/img/placeholder.jpg'}
                        className='
                            absolute
                            inset-0
                            h-full
                            w-full
                            rounded-l-full
                            
                        '
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
                    Floor 9, Laila Tower, Salem Al Mubarak Street, Salmiya
                </h1>

                <Button
                    className='
                        button
                        w-2/3
                    '
                    style={{
                        "--button-bg": "#0071e3",
                        alignSelf:'center', 
                        justifySelf:'center'
                    }}
                >
                    Get Directions

                </Button>
                

            </Flex>

            <Flex
                className='
                    flex-1
                    flex-col
                    order-1
                '


            >
                <h2
                    className='
                        secondary_header
                        
                    '
                    style={{
                        color:'black',
                        fontWeight:'bold',
                    }}
                >
                    Book an Appointment
                </h2>
                
                <BookingForm />
                

            </Flex>

        </Flex>

        <ContactOptions />
        
    </div>
  )
}

export default BookingMain
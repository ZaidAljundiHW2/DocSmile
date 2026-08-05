import React from 'react'
import UrgentCTABack from '@/assets/img/Backgrounds/UCTAback.jpg'
import { Flex, Button } from '@chakra-ui/react'
import { FaRegClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const UrgentCTA = () => {
  return (

    <div 
        className='
            bg-white
            min-h-[50vh]
            justify-end
            flex
            relative
            items-center

        '
    >

        <div
            className='
                mask-r-from-0% mask-r-to-50%
                absolute
                inset-0
                w-full
                h-full
            '

            style={{
                backgroundImage: `url(${UrgentCTABack})`,
                backgroundSize:"100% 100%",
            }}


        />

       

        <Flex className='w-1/2 flex-col gap-5'>

            <h1 className='main_header'>
                APPROVED URGENT-CONCERN HEADING
            </h1>

            <Flex className='items-center gap-5'>
                <FaRegClock color='#071f97' className='secondary_header'/>

                <h2 className='secondary_header'>
                    Working Hours: 9:00 AM - 11:00 PM
                </h2>
                
            </Flex>

            <Button className='button' style={{"--button-bg": "black"}}>
                Call Us
                <FaPhoneAlt />
            </Button>



        </Flex>

    </div>
    
  )
}

export default UrgentCTA
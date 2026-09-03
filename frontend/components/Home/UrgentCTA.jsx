import React from 'react'
import { Flex } from '@chakra-ui/react'
import { FaRegClock } from "react-icons/fa";
import CallButton from '../Misc/CallButton';

const UrgentCTA = ({ footerHours }) => {
  return (

    <div 
        className='
            bg-white
            justify-end
            p-10
            flex
            relative
            items-center

        '
    >

        <div
            className='
                
                mask-t-from-0% mask-t-to-70%
                mask-r-from-100% mask-r-to-100%

                md:mask-t-from-100% md:mask-t-to-100%
                md:mask-r-from-0% md:mask-r-to-50%

                absolute
                inset-0
                w-full
                h-full
            '

            style={{
                backgroundImage: `url(${'/img/Backgrounds/UCTAback.jpg'})`,
                backgroundSize:"100% 100%",
            }}


        />

       

        <Flex className='md:w-1/2 w-full flex-col gap-5'>

            <h1 className='main_header'>
                APPROVED URGENT CONCERN HEADING
            </h1>

            <Flex className='items-center gap-5'>
                <FaRegClock color='#071f97' className='secondary_header'/>

                <h2 className='secondary_header'>
                    {footerHours}
                </h2>
                
            </Flex>

            <CallButton />



        </Flex>

    </div>
    
  )
}

export default UrgentCTA
import { Flex, Box, Button } from '@chakra-ui/react'
import BookButton from '../Misc/BookButton'
import WhatsappButton from '../Misc/WhatsappButton';
import Image from 'next/image';
import CallButton from '../Misc/CallButton';

const Hero = () => {
  return (
    <div
      className='
        md:h-[100vh]
        min-h-[50vh]
        justify-center
        items-center
        flex
        relative
        w-full
        md:text-start
        text-center
        p-10
      '

      
    >

        <img 
            src={'/img/Backgrounds/hero_back.jpg'}
            className='
                absolute
                inset-0     
                w-full
                h-full           
                object-cover
            '
            alt='Doctor Smile Hero Image'
        />

        {/* Transparent layer */}
        <Box
            className='
                absolute
                inset-0
                h-full
                w-full
                bg-[#CCE0FF]/75
                z-1
            '
        
        />

        {/* blue wave */}
        <img 

            src={'/img/Backgrounds/bluewave_w_graphics.webp'}
            alt='blue wave graphic'
            className='
                absolute
                bottom-0
                z-0
                w-full
            '

            
        
        />

        <div 
            className='
                w-full 
                h-full
                absolute
                inset-0
                z-2
                md:hidden
            '
        >
            <Box 
                className='
                    w-full
                    h-full
                    bg-white
                    mask-t-from-0%
                    mask-t-to-20%
                '
            
            />

        </div>
        

        <div 
            className='
                flex
                flex-col 
                gap-2 
                md:w-[50%] 
                w-full
                z-3
            
            '
        >

            {/* Name */}

            <h1 className='main_header'>
                Doctor Smile Dental Center
            </h1>

            {/* factual h1 */}
            <h1>
                Doctor Smile Dental Center is one of Kuwait&apos;s finest and most modern private dental care centers, located at the prestigious Laila Tower in Salem Al-Mubarak.
            </h1>

            {/* approved message */}
            <h2 className='secondary_header'>
                Short approved message

            </h2>

            {/* CTA buttons */}

            <Flex className='flex-col' gap={{base:'5'}}>

                <h1 className='secondary_header'>Book your appointment now</h1>

                <Flex gap={{base:'5'}} className='md:flex-row flex-col'>

                    <BookButton />

                    <WhatsappButton />

                    <CallButton />

                </Flex>
              
            </Flex>

        </div>


    
    </div>
  )
}

export default Hero
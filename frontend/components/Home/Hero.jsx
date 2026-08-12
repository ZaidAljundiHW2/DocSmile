import { Flex, Box, Button } from '@chakra-ui/react'
import BookButton from '../Misc/BookButton'
import WhatsappButton from '../Misc/WhatsappButton';
import Image from 'next/image';
import { resolveImg } from '@/utils/resolveImg';

const Hero = () => {
  return (
    <div
      className='
        h-[100vh]
        bg-red-500
        justify-center
        items-center
        flex
        relative
      '

      style={{
        backgroundImage:`url(${resolveImg('/img/Backgrounds/hero_back.jpg')})`,

      }}
    >

        {/* Transparent layer */}
        <Box
            className='
                absolute
                inset-0
                h-full
                w-full
                bg-[#CCE0FF]/50
                z-1
            '
        
        />

        {/* blue wave */}
        <img 

            src={resolveImg('/img/Backgrounds/bluewave_w_graphics.webp')}
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
                flex
                flex-col 
                gap-2 
                w-[50%] 
                z-2
            
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

                <Flex gap={{base:'5'}}>

                    <BookButton />

                    <WhatsappButton />

                </Flex>
              
            </Flex>

        </div>


    
    </div>
  )
}

export default Hero
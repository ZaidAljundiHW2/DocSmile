import { Flex, Box, Button } from '@chakra-ui/react'
import { FaCalendar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import HeroBack from '@/assets/img/Backgrounds/hero_back.jpg'
import BlueWave from '@/assets/img/Backgrounds/bluewave_w_graphics.webp'

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
        backgroundImage:`url(${HeroBack})`,

      }}
    >

        {/* Transparent layer */}
        <Box
            className='
                absolute
                inset-0
                h-full
                w-full
                bg-[#ccf2ff]/50
                z-1
            '
        
        />

        {/* blue wave */}
        <img 

            src={BlueWave}
            className='
                absolute
                bottom-0
                z-0
                w-full
            '

            
        
        />

        <Flex className='flex-col gap-2 w-[50%] z-2'>

            {/* Name */}

            <h1 className='main_header'>
                Doctor Smile Dental Center
            </h1>

            {/* factual h1 */}
            <h1>
                Doctor Smile Dental Center is one of Kuwait's finest and most modern private dental care centers, located at the prestigious Laila Tower in Salem Al-Mubarak.
            </h1>

            {/* approved message */}
            <h2 className='secondary_header'>
                Short approved message

            </h2>

            {/* CTA buttons */}

            <Flex className='flex-col' gap={{base:'5'}}>

                <h1 className='secondary_header'>Book your appointment now</h1>

                <Flex gap={{base:'5'}}>

                    <Button 
                        className='button' 
                        style={{"--button-bg": "#0071e3"}}

                    >

                        Book Online

                        <FaCalendar />
                      
                    </Button>

                    <Button className='button' style={{"--button-bg": "#25D366"}}>
                        WhatsApp Us
                        <FaWhatsapp />
                    </Button>

                </Flex>
              
            </Flex>

        </Flex>


    
    </div>
  )
}

export default Hero
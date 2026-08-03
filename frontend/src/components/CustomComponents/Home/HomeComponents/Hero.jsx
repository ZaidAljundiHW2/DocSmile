import { Flex, Box, Button } from '@chakra-ui/react'

const Hero = () => {
  return (
    <div
      className='
        h-[100vh]
        bg-red-500
        justify-center
        items-center
        flex
      '
    >

      <Flex className='flex-col w-[50%]'>

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

        <Flex className='flex-col'>

          <h1>Book your appointment now</h1>
          <Flex>
            <Button>

              Book Online
              
            </Button>

            <Button>
              WhatsApp Us
            </Button>

          </Flex>
          
        </Flex>

      </Flex>


    
    </div>
  )
}

export default Hero
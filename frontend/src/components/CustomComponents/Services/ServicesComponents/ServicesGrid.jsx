import { Flex, SimpleGrid, Box } from '@chakra-ui/react'
import ServicesJSON from '@/assets/JSONs/services.json'
import { resolveImg } from '@/utils/resolveImg'
import { useNavigate } from 'react-router-dom'

const ServicesGrid = () => {

    const navigate = useNavigate();

  return (
    <div
        className='
            w-full
            bg-white
            flex
            justify-center
            items-center
            flex-col
        '
        style={{padding:'20px'}}
    >


        <SimpleGrid
            columns={{base:2, md:3}}
            className='w-full'
        >
            {ServicesJSON.map((item,i) => (

                <Flex
                    className='
                        items-center
                        justify-center
                        relative
                        aspect-square
                        scale-90
                        hover:scale-100
                        transition-transform
                        duration-300
                        cursor-pointer
                    '
                    key={i}

                    onClick={() => navigate(`/Services/${encodeURIComponent(item.name)}`)}
                >
                    <img 
                        src={resolveImg(item.img)}
                        className='
                            absolute
                            inset-0
                            w-full
                            h-full
                            z-0
                        '
                    />

                    {/* dark layer */}
                    <Box 
                        className='
                            absolute
                            inset-0
                            bg-black/70
                            z-1
                        '
                    />

                    <h1
                        className='
                            main_header
                            z-2
                        '
                        style={{
                            color:'white'
                        }}
                    >
                        {item.name}

                    </h1>

                </Flex>

            ))}
            

        </SimpleGrid>
        
    </div>
  )
}

export default ServicesGrid
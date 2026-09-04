import { SimpleGrid, Flex, Box } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import { Service } from '@/payload-types';
import { getTranslations } from 'next-intl/server';

const ServicesPrev = async({services, showMore, header} : {services : Service[], showMore : boolean, header : string }) => {

    const t = await getTranslations('home.servicesPreview');


  return (
    <div 
        className='
            flex
            flex-col
            items-center
            bg-[#f2eeee]
            gap-5
        '

        style={{
            padding:'20px'
        }}
    >

        <h1 className='main_header'>
            {header}
        </h1>

        

        <SimpleGrid 
            columns={3} 
            w={{base:'100%', md:'50%'}}
            spacing={4}
        >
            {services.map((service, i) => (
                <Flex 
                    className='
                        justify-center 
                        items-center 
                        aspect-square
                        relative
                        overflow-hidden
                        scale-90
                        hover:scale-100
                        transition-transform
                        duration-300
                        cursor-pointer
                        text-center
                        p-4
                        
                    '
                    
                    key={i}
                >
                    <img 
                        src={service.image.url}
                        className='
                            absolute
                            inset-0
                            w-full
                            h-full
                            z-0
                        '
                    />
                    <Box className='absolute bg-black/70 inset-0 z-1' />
                    <h2 className='secondary_header z-2' style={{ color: 'white' }}>
                        {service.name}
                    </h2>
                </Flex>
            ))}
        </SimpleGrid>
        
        {showMore && (
            <Flex
                className='
                    flex-col
                    justify-center
                    items-center
                    gap-2
                '
            >

                <h2 className='secondary_header'>
                    {t('header')}
                </h2>

                <FaChevronDown 
                    className='
                        secondary_header
                        scale-90
                        hover:scale-100
                        duration-300
                        cursor-pointer
                    '
                    
                />
                

            </Flex>

        )}
        

        
    </div>
  )
}

export default ServicesPrev
import React from 'react'
import miscback from '/img/Backgrounds/miscback.jpg'
import { Flex, Box } from '@chakra-ui/react'
import BookButton from '../Misc/BookButton'
import CallButton from '../Misc/CallButton'
import { resolveImg } from '@/utils/resolveImg'

const DoctorBook = ({name} : {name:string}) => {
  return (
    <div
        className='
            bg-white
            flex
            relative
            items-center
            p-10
            flex-col
            gap-5
            

        '
    >
        <div
            className='
                doctorprofilecontainer
                items-center
                absolute
                inset-0
                h-full
                w-full
                mask-r-from-0% mask-r-to-50%
            '

            style={{
                backgroundImage:`url(${resolveImg('/img/Backgrounds/miscback.jpg')})`,
                backgroundSize:'100% 100%'
            }}
        />
        {/* transparent layer */}
        <Box 
            className='
                absolute
                inset-0
                bg-[#CCE0FF]/10
                z-0
            '
        
        />

        <Flex>
            <h1
                className='
                    main_header
                    z-1

                '
                style={{
                    color:'black'
                }}
            >
                Book an appointment with {name}

            </h1>

        </Flex>
        

        <Flex className='gap-5 flex-1 items-center z-1 justify-center'>
            <BookButton />
            <CallButton />

        </Flex>
            
            

    </div>
    
  )
}

export default DoctorBook
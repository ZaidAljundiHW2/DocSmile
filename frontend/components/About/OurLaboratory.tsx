import React from 'react'
import { Flex } from '@chakra-ui/react'

const OurLaboratory = () => {
  return (
    <div
        className='
            bg-white
            flex
            md:flex-row
            flex-col
            md:p-10
            p-5
            gap-5
        '
    >

        <Flex
            className='
                flex-col
                gap-5
                md:w-2/3
                w-full
            '
        >
            <h1
                className='main_header'
                style={{
                    color:'black'
                }}
            >
                Our Laboratory
            </h1>

            <Flex
                className='
                    flex-col
                    gap-5
                '
                style={{
                    color:'black'
                }}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

               

            </Flex>

        </Flex>
        
        <Flex className='md:w-1/3 w-full'>
            <img 
                src={'/img/placeholder.jpg'}
                className='object-cover'
                style={{
                    width: '100%',
                    height: 'auto',
                    flexShrink: 0,
                }}
            />

        </Flex>
        

    </div>
  )
}

export default OurLaboratory
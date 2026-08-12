import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import './Navbar.css'
import { FaUserDoctor } from "react-icons/fa6";
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div
        className='
            h-[12vh]
            bg-white
            w-full
            flex
            items-center
            justify-center
        '

    >

        <Flex
            className='w-[70%]'
        >
            {/* Logo */}
            <Box
                className='
                    w-[20%]
                    h-fill
                    flex
                '
            >

                <img 
                    src={'/icons/company-logo.png'} 

                    alt='doctor smile company logo'
                    style={{
                        width:'auto',
                        height:'auto',
                        
                        transform:'scale(.6)'
                    }}
                
                />

                

            </Box>
            
            {/* Navbar */}
            <Flex className='navbaroptions items-center justify-center flex-1'>
                
                <Link href={'/'}>
                    <h1>
                        Home
                    </h1>
                </Link>
                
                <Link href={'/Services'}>
                    <h1>
                        Services
                    </h1>
                </Link>
                
                <Link href={'/Doctors'}>
                    <h1>
                        Doctors
                    </h1>
                </Link>
                
              
                
                <h1>
                    About
                </h1>

                <h1>
                    Patient Information
                </h1>

                <Link href={'/Contact'}>
                    <h1>
                        Contact
                    </h1>
                </Link>

                <button
                    className='
                        rounded-full
                    '
                    style={{
                        
                        background:'#071f97',
                        padding:'15px'
                    }}
                >

                    <Flex className='items-center justify-center gap-2'>

                        <Box
                            style={{
                                borderRadius:'50%',
                                padding:'3px',
                                background:'white'
                            }}
                        >
                            <FaUserDoctor color='#071f97' />
                        </Box>

                        <h1 style={{color:'white'}}>
                            Request Appointment
                        </h1>
                        
                    </Flex>

                </button>

            </Flex>

        </Flex>
      
    </div>
  )
}

export default Navbar

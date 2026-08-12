import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import './Navbar.css'
import { FaUserDoctor } from "react-icons/fa6";
import Link from 'next/link'
import Image from 'next/image'
import { resolveImg } from '@/utils/resolveImg';

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
                    src={resolveImg('/icons/company-logo.png')} 

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
                
                <Link href={'/Booking'}>
                    <Button
                        className='
                            button
                        '
                        style={{
                            "--button-bg": "#071f97",
                            fontSize:'1vw'
                            
                        }}
                    >


                        <FaUserDoctor />

                        
                        Request Appointment
                            

                    </Button>
                
                </Link>
                

            </Flex>

        </Flex>
      
    </div>
  )
}

export default Navbar

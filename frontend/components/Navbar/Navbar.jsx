import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import './Navbar.css'
import { FaUserDoctor } from "react-icons/fa6";
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Portal } from "@chakra-ui/react"
import { FaCaretDown } from "react-icons/fa";

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
            <Flex className='navbaroptions gap-5 items-center justify-center flex-1'>
                
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
                
              
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button as={'h1'}>
                            About

                            <FaCaretDown />

                        </Button>
                    </Menu.Trigger>

                    <Portal >
                        <Menu.Positioner>
                        <Menu.Content
                            className="bg-white"
                            css={{
                                "& [data-highlighted]": {
                                    background: "transparent",
                                },
                                "& [data-highlighted]:hover": {
                                    background: "transparent",
                                    cursor:'pointer'
                                },
                            }}
                        >

                            <Link href={'/About/Doctor-Smile'}>
                                <Menu.Item 
                                    value="About Us" 
                                    as={'h1'}
                                

                                >
                                    About Us
                                </Menu.Item>
                            </Link>
                            
                            <Link href={'/About/Patient-Experience'}>
                                <Menu.Item 
                                    value="Patient Experience" 
                                    as={'h1'}
                                
                                >
                                    Patient Experience
                                </Menu.Item>
                            </Link>

                            <Link href={'/About/Laboratory'}>
                                <Menu.Item 
                                    value="Our Laboratory" 
                                    as={'h1'}
                                    
                                >
                                    Our Laboratory
                                </Menu.Item>
                            </Link>
                            
                        </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
                
                <Link href={'/Patient-Information'}>
                
                    <h1>
                        Patient Information
                    </h1>
                </Link>

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

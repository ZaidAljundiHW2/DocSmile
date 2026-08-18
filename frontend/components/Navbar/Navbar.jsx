import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import './Navbar.css'
import { FaUserDoctor } from "react-icons/fa6";
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Portal } from "@chakra-ui/react"
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaCaretRight } from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null)

    const pathname = usePathname()

    useEffect(() => {
        setMenuOpen(false)


    }, [pathname])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    const options = [
        {
            "name": "Home",
            "hasChildren": false,
            "link": "/"
        },

        {
            "name": "Services",
            "hasChildren": false,
            "link": "/Services"
        },

        {
            "name": "Doctors",
            "hasChildren": false,
            "link": "/Doctors"
        },

        {
            "name": "About",
            "hasChildren": true,
            "children": [
                {
                    "name": "About Us",
                    "link": "/About/Doctor-Smile"
                },
                {
                    "name": "Patient Experience",
                    "link": "/About/Patient-Experience"
                },
                {
                    "name": "Our Laboratory",
                    "link": "/About/Laboratory"
                }
            ]
        },

        {
            "name": "Patient Information",
            "hasChildren": false,
            "link": "/Patient-Information"
        },

        {
            "name": "Contact",
            "hasChildren": false,
            "link": "/Contact"
        },

        {
            "name": "Book Appointment",
            "hasChildren": false,
            "link": "/Booking"
        }
    ]

    

  return (
    <>
        <div
            className='
                h-[12vh]
                bg-white
                w-full
                flex
                items-center
                justify-center
                hidden
                md:flex
            '

        >

            <Flex
                className='
                    w-[70%]
                    
                '

                
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

        <div
            className={`
                h-[12vh]
                w-full
                flex
                items-center
                justify-center
                md:hidden
                bg-white
            `}

            
        >
            <Flex
                
                
                className='
                    w-full
                    px-10
                    items-center
                '
            >
                <div
                    
                    className='z-120'
                >
                    <input id="checkbox" type="checkbox" onClick={() => setMenuOpen(prev => !prev)} />
                    <label className="toggle" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>


                </div>
                
                {menuOpen ? (

                        <img 
                            src={'/icons/company-logo-white.webp'}
                            alt='doctor smile company logo'
                            className='
                                ml-auto
                                h-[100px]
                                w-auto
                                z-120
                            '

                        />

                    )
                    
                    :

                    (
                        <img 
                            src={'/icons/company-logo.png'}
                            alt='doctor smile company logo'
                            className='
                                ml-auto
                                h-[100px]
                                w-auto
                                z-120
                            '

                        />

                    )
                }
                

                {menuOpen && (

                    <div
                        className='
                            inset-0
                            fixed
                            bg-[#809BCE]/95
                            p-10
                            
                        '
                    >
                        <div
                            className='
                                h-full
                                w-full
                                overflow-y-scroll
                                divide-y-4
                                divide-white
                                flex
                                flex-col
                                mt-[15vh]
                                overflow-x-hidden
                            '
                        >

                            {options.map((item, i) => (
                                
                                

                                    
                                <div
                                    className='
                                        p-2
                                        w-full
                                    '
                                    key={i}
                                >
                                    {!item.hasChildren && (
                                        <Link href={item.link}>
                                            <h1
                                                className='
                                                    main_header
                                                '
                                                style={{
                                                    color:'white'
                                                }}
                                            >
                                                {item.name}
                                            </h1>
                                        </Link>

                                        

                                    )}

                                    {item.hasChildren && (
                                        <div>
                                            <Flex
                                                className='items-center'
                                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                            >
                                                <h1
                                                    className='main_header'
                                                    style={{ color: 'white' }}
                                                >
                                                    {item.name}
                                                </h1>

                                                <FaCaretRight
                                                    color='white'
                                                    className={`ml-auto main_header transition-transform ${openIndex === i ? 'rotate-90' : ''}`}
                                                />
                                            </Flex>

                                            {openIndex === i && (
                                                <>
                                                    {item.children.map((child, j) => (
                                                        <div key={j} className='w-full ml-10 p-2'>
                                                            <Link href={child.link}>
                                                                <h1
                                                                    className='secondary_header'
                                                                    style={{ color: 'white', fontWeight: 'bold' }}
                                                                >
                                                                    {child.name}
                                                                </h1>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    )}
                                    


                                </div>
                                
                                
                            ))}

                        </div>

                    </div>
                )}
            </Flex>
            
            
            
        </div>
    
    </>
    
  )
}

export default Navbar

"use client"
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
import { useRef, useLayoutEffect } from 'react';

const Navbar = () => {

    const headerRef = useRef(null)

    useLayoutEffect(() => {
        const node = headerRef.current
        if (!node) return

        const setVar = (px) => {
        document.documentElement.style.setProperty('--header-height', `${px}px`)
        }

        const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
            const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.offsetHeight
            setVar(height)
        }
        })

        observer.observe(node, { box: 'border-box' })

        const recheck = () => setVar(node.offsetHeight)

        const images = node.querySelectorAll('img')
        images.forEach((img) => {
        if (!img.complete) {
            img.addEventListener('load', recheck, { once: true })
        }
        })

        if (document.fonts?.ready) {
        document.fonts.ready.then(recheck)
        }

        window.addEventListener('resize', recheck)

        return () => {
        observer.disconnect()
        window.removeEventListener('resize', recheck)
        images.forEach((img) => img.removeEventListener('load', recheck))
        }
    }, [])

    const [menuOpen, setMenuOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const pathname = usePathname();


    const [isVisible, setIsVisible] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {

        

        const handleScroll = () => {

            const currScrollY = window.scrollY;

            if (currScrollY > 100) {
                setIsVisible(true);
            }

            else {
                setIsVisible(false);
            }

        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
        



    },[])

    

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
                    "link": "/About/AboutUs"
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
            className={`

                bg-${isVisible ? 'white' : 'transparent'}
                transition-color
                duration-300
                shadow-${isVisible ? 'shadow' : 'none'}
                w-full
                flex
                items-center
                hidden
                md:flex
                fixed
                z-999
            
            `}
            
            ref={headerRef}

        >

            <Flex
                className='
                    gap-5
                    px-20
                    w-full
                '

                
            >

                <Box
                    className={`
                        h-[75px]
                        ${isVisible ? 'opacity-100' : 'opacity-0'}
                        transition-opacity
                        duration-300


                    `}
                >
                    <img 
                        src={'/icons/company-logo.png'} 

                        alt='doctor smile company logo'
                        className={`
                            

                            h-full
                            w-full
                            
                        `}
                        
                    
                    />

                </Box>
                

                    

                
                {/* Navbar */}
                <Flex 
                    className='
                        navbaroptions 
                        gap-5 
                        items-center 
                        justify-center 
                        
                        ml-auto
                    '
                >
                    
                    <Link 
                        href={'/'}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                        
                        Home
                        
                    </Link>
                    
                    <Link 
                        href={'/Services'}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                        Services
                    </Link>
                    
                    <Link 
                        href={'/Doctors'}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                        Doctors
                    </Link>
                    
                
                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button 
                                className='
                                    bg-transparent
                                '                                
                            
                            >
                                <div
                                    className={`
                                        bg-transparent
                                        ${isVisible ? 'text-[#808080]' : 'text-white'}
                                        transition-color
                                        duration-300
                                    `}
                                >
                                    About
                                </div>
                                

                                <FaCaretDown 
                                    className={`
                                        ${isVisible ? 'text-[#808080]' : 'text-white'}
                                        transition-color
                                        duration-300
                                    `}
                                />

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

                                <Link href={'/About/AboutUs'}>
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
                    
                    <Link 
                        href={'/Patient-Information'}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                    
                        Patient Information
                    </Link>

                    <Link 
                        href={'/Contact'}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                            Contact
                    </Link>
                    
                    <Link href={'/Booking'}>
                        <Button
                            className='
                                rounded-full
                                bg-[#071f97]
                                text-white
                                border-[2px]
                                border-white
                                hover:border-[#071f97]
                                hover:text-[#071f97]
                                hover:bg-white
                            '
                           
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
                            bg-[#124ddc]/95
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

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
import { useTranslations } from 'next-intl';

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

    const t = useTranslations('navbar');
    const tButtons = useTranslations('buttons');

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

    // Route metadata for each nav item, in the same order as navbar.navOptions
    // in en.json / ar.json. Only the display "name" comes from translations —
    // links aren't locale-specific so they stay defined here.
    const navMeta = [
        { hasChildren: false, link: "/" },
        { hasChildren: false, link: "/Services" },
        { hasChildren: false, link: "/Doctors" },
        {
            hasChildren: true,
            children: [
                { link: "/About/AboutUs" },
                { link: "/About/Patient-Experience" },
                { link: "/About/Laboratory" }
            ]
        },
        { hasChildren: false, link: "/Patient-Information" },
        { hasChildren: false, link: "/Contact" },
        { hasChildren: false, link: "/Booking" }
    ];

    const navOptionsRaw = t.raw('navOptions');

    const options = navOptionsRaw.map((opt, i) => ({
        name: opt.name,
        hasChildren: navMeta[i].hasChildren,
        link: navMeta[i].link,
        children: opt.children?.map((child, j) => ({
            name: child.name,
            link: navMeta[i].children[j].link
        }))
    }));

    

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
                        href={options[0].link}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                        
                        {options[0].name}
                        
                    </Link>
                    
                    <Link 
                        href={options[1].link}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                        {options[1].name}
                    </Link>
                    
                    <Link 
                        href={options[2].link}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                        {options[2].name}
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
                                    {options[3].name}
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

                                <Link href={options[3].children[0].link}>
                                    <Menu.Item 
                                        value="About Us" 
                                        as={'h1'}
                                    

                                    >
                                        {options[3].children[0].name}
                                    </Menu.Item>
                                </Link>
                                
                                <Link href={options[3].children[1].link}>
                                    <Menu.Item 
                                        value="Patient Experience" 
                                        as={'h1'}
                                    
                                    >
                                        {options[3].children[1].name}
                                    </Menu.Item>
                                </Link>

                                <Link href={options[3].children[2].link}>
                                    <Menu.Item 
                                        value="Our Laboratory" 
                                        as={'h1'}
                                        
                                    >
                                        {options[3].children[2].name}
                                    </Menu.Item>
                                </Link>
                                
                            </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                    
                    <Link 
                        href={options[4].link}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                    
                        {options[4].name}
                    </Link>

                    <Link 
                        href={options[5].link}
                        className={`
                            ${isVisible ? 'text-[#808080]' : 'text-white'}
                            transition-color
                            duration-300
                        `}
                    >
                            {options[5].name}
                    </Link>
                    
                    <Link href={options[6].link}>
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

                            
                            {tButtons('book')}
                                

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
import React from 'react'
import { Flex } from '@chakra-ui/react'
import './MapsPrev.css'
import { FaLocationArrow } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";
import LanguageSwitch from '../Misc/LanguageSwitch';
import Image from 'next/image';

const MapsPrev = () => {
  return (
    <div
        className='
            min-h-[70vh]
            bg-[#fafcfc]
            flex
        '
        style={{
            padding:'20px 0 20px 0'
        }}
    >

        <Flex 
            className='
                w-[60%] 
                h-full
                flex-col
                gap-5
            '

            style={{
                padding:'20px 20px 20px 10%'
            }}
        >

            <img 
                src={"/icons/company-logo.png"} 
                alt='doctor smile company logo'
                style={{
                    width:'250px',
                    height:'auto'
                }}
            />

            <h1>
                Doctor Smile Dental Center is one of Kuwait&apos;s finest and most modern private dental care centers, located at the prestigious Laila Tower in Salem Al-Mubarak Street.
            </h1>


            <Flex className='flex-col gap-2 justify-start items-start'>

                <Flex className='items-center justify-center gap-3'>

                    <FaLocationArrow size={'1.7rem'} color='#071f97'/>

                    <Flex
                        className='
                            MapsPrevInfoItem
                        '
                    >
                        <h1>
                            Our address
                        </h1>

                        <h1>
                            Floor 9, Laila Tower, Salem Al Mubarak Street, Salmiya
                        </h1>

                    </Flex>
                </Flex>


                <Flex className='items-center justify-center gap-3'>

                    <FaRegClock size={'1.7rem'} color='#071f97'/>

                    <Flex
                        className='
                            MapsPrevInfoItem
                        '
                    >
                        <h1>
                            Working Hours
                        </h1>

                        <h1>
                            Saturday - Thursday 9:00 AM - 9:00 PM , Friday Closed
                        </h1>

                    </Flex>
                </Flex>


                <Flex className='items-center justify-center gap-3'>

                    <IoMdMail size={'1.7rem'} color='#071f97'/>

                
                    <Flex
                        className='
                            MapsPrevInfoItem
                        '
                    >
                        <h1>
                            Email address
                        </h1>

                        <h1>
                            info@doctorsmilekw.com
                        </h1>

                    </Flex>

                </Flex>

                <Flex className='items-center justify-center gap-3'>

                    <FaPhoneAlt size={'1.7rem'} color='#071f97'/>

                
                    <Flex
                        className='
                            MapsPrevInfoItem
                        '
                    >
                        <h1>
                            Phone Number
                        </h1>

                        <h1>
                            123456789
                        </h1>

                    </Flex>

                </Flex>



                
            </Flex>

            <Flex className='items-center gap-4 mt-auto'>
                <RiInstagramFill size={'1.5rem'} color='#071f97' className='cursor-pointer'/>
                <FaFacebook size={'1.5rem'} color='#071f97' className='cursor-pointer'/>
                <FaYoutube size={'1.5rem'} color='#071f97' className='cursor-pointer'/>
                <FaSquareXTwitter size={'1.5rem'} color='#071f97' className='cursor-pointer'/>
                <FaSnapchat size={'1.5rem'} color='#071f97' className='cursor-pointer'/>
            </Flex>

            <LanguageSwitch />

        </Flex>

        

        <Flex
            className='
                flex-1
                bg-green-500
                justify-center
                items-center
            '
        >

            <h1>
                map component
            </h1>


        </Flex>
      
    </div>
  )
}

export default MapsPrev

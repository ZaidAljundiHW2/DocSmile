import React from 'react'
import { Flex } from '@chakra-ui/react'
import CompanyLogo from '@/assets/icons/company-logo.png'
import './MapsPrev.css'
import { FaLocationArrow } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

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
                src={CompanyLogo} 
                style={{
                    width:'250px',
                    height:'auto'
                }}
            />

            <h1>
                Doctor Smile Dental Center is one of Kuwait's finest and most modern private dental care centers, located at the prestigious Laila Tower in Salem Al-Mubarak Street.
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



                
            </Flex>

        </Flex>
      
    </div>
  )
}

export default MapsPrev

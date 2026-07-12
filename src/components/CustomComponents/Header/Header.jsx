import React from 'react'
import HeaderBack from '@/assets/img/Backgrounds/headerback.jpg'
import { Flex } from '@chakra-ui/react'
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import './Header.css'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TbView360Number } from "react-icons/tb";

const Header = () => {
  return (
    <div
        className='
            w-full
            min-h-[7vh]
            flex
            items-center
            justify-center
            headerwrapper
        '

        style={{
            backgroundImage: `url(${HeaderBack})`,
            backgroundSize:'100% 100%'
        }}
    >

      <Flex
        className='w-[70%] gap-5'
      >

        <Flex className='HeaderInfoItem'>
          <MdLocationOn />
          <h1>Floor 9, Laila Tower, Salem Al Mubarak Street, Salmiya</h1>
        </Flex>

        <Flex className='HeaderInfoItem'>
          <MdEmail />
          <h1>info@doctorsmilekw.com</h1>
        </Flex>

        <Flex className='HeaderInfoItem'>
          <FaPhone />
          <h1>22089700</h1>
        </Flex>

        <Flex className='items-center gap-5 flex-1 justify-end'>

          <FaFacebookF />
          <FaSquareXTwitter />
          <FaInstagram />
          <FaSnapchat />
          <FaYoutube />
          <FaWhatsapp />
          <TbView360Number />


        </Flex>

      </Flex>
      
    </div>
  )
}

export default Header

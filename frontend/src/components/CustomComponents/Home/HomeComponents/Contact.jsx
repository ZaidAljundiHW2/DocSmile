import { Flex, Icon } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Contact = () => {
  return (
    <div
        className='
            flex
            bg-[#CCE0FF]
        '

        style={{
            padding:'20px'
        }}
    >

        <Flex
            className="
                flex-1
                items-center
                justify-center
                rounded-full
                text-center
                scale-90
                hover:scale-100
                transition-all
                cursor-pointer
                bg-[#071f97]
                hover:bg-white
                text-white
                hover:text-[#071f97]
                gap-5
            "

            style={{
                borderWidth:'2px',
                padding:'20px'
            }}

            
        >
            
            
            <h2 
                style={{
                    fontWeight:'bold', 
                    fontSize: "clamp(1.2rem, 1.5vw, 2rem)" 
                }}
            >
                Call Us
            </h2>

            <Icon as={FaPhoneAlt} boxSize={8}/>
            

        </Flex>

        <Flex
            className="
                flex-1
                items-center
                justify-center
                rounded-full
                text-center
                scale-90
                hover:scale-100
                transition-all
                cursor-pointer
                bg-[#071f97]
                hover:bg-white
                text-white
                hover:text-[#071f97]
                gap-5
            "

            style={{
                borderWidth:'2px',
                padding:'20px'
            }}

            
        >
            
            
            <h2 
                style={{
                    fontWeight:'bold', 
                    fontSize: "clamp(1.2rem, 1.5vw, 2rem)" 
                }}
            >
                WhatsApp Us
            </h2>

            <Icon as={FaWhatsapp} boxSize={8}/>
            

        </Flex>

        <Flex
            className="
                flex-1
                items-center
                justify-center
                rounded-full
                text-center
                scale-90
                hover:scale-100
                transition-all
                cursor-pointer
                bg-[#071f97]
                hover:bg-white
                text-white
                hover:text-[#071f97]
                gap-5
            "

            style={{
                borderWidth:'2px',
                padding:'20px'
            }}

            
        >
            
            
            <h2 
                style={{
                    fontWeight:'bold', 
                    fontSize: "clamp(1.2rem, 1.5vw, 2rem)" 
                }}
            >
                Enquire
            </h2>

            <Icon as={IoDocumentText} boxSize={8}/>
            

        </Flex>
        
    </div>
  )
}

export default Contact
import { Flex } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoDocumentText, IoCalendar } from "react-icons/io5";

const ContactOptions = ({ isEnquire = true }) => {
  return (
    <div
        className='
            flex
            flex-row
            bg-[#CCE0FF]
            p-2
            md:p-5
            gap-2
            md:gap-5
        '
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
                border-2
                px-2
                py-3
                md:px-8
                md:py-5
                gap-2
                md:gap-5
            "
        >
            
            
            <h2 
                style={{
                    fontWeight:'bold', 
                    fontSize: "clamp(0.75rem, 2.5vw, 2rem)" 
                }}
            >
                Call Us
            </h2>

            <FaPhoneAlt className="w-4 h-4 md:w-8 md:h-8" />
            

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
                border-2
                px-2
                py-3
                md:px-8
                md:py-5
                gap-2
                md:gap-5
            "
        >
            
            
            <h2 
                style={{
                    fontWeight:'bold', 
                    fontSize: "clamp(0.75rem, 2.5vw, 2rem)" 
                }}
            >
                WhatsApp Us
            </h2>

            <FaWhatsapp className="w-4 h-4 md:w-8 md:h-8" />
            

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
                border-2
                px-2
                py-3
                md:px-8
                md:py-5
                gap-2
                md:gap-5
            "
        >
            
            
            <h2 
                style={{
                    fontWeight:'bold', 
                    fontSize: "clamp(0.75rem, 2.5vw, 2rem)" 
                }}
            >
                {isEnquire ? "Enquire" : "Book an Appointment"}
            </h2>

            {isEnquire ? <IoDocumentText className="w-4 h-4 md:w-8 md:h-8" /> : <IoCalendar className="w-4 h-4 md:w-8 md:h-8" />}
            

        </Flex>
        
    </div>
  )
}

export default ContactOptions
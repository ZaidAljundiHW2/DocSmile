import { Flex, Box } from "@chakra-ui/react"
import '../Home.css'
import { Button } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Location = () => {

    const operationHours = [
        {
            "day":"Sunday",
            "time":"09:00 - 17:00"
        },
        {
            "day":"Monday",
            "time":"09:00 - 17:00"
        },
        {
            "day":"Tuesday",
            "time":"09:00 - 17:00"
        },
        {
            "day":"Wednesday",
            "time":"09:00 - 17:00"
        },
        {
            "day":"Thursday",
            "time":"09:00 - 17:00"
        },
        {
            "day":"Friday",
            "time":"Closed"
        },
        {
            "day":"Saturday",
            "time":"Closed"
        }
    ]

  return (
    <div
        className='
            flex
            w-full
            flex-col
            gap-5
            location
            bg-white
            min-h-[70vh]
        '
        
        style={{
            padding:'20px'
        }}
    >

        <Flex className="items-center gap-5 w-full">
            <h1 className="main_header">
                Our Location
            </h1>

            <Box className="flex-1 h-[5px] bg-[#071f97]"/>

        </Flex>
        
        <Flex className="w-full h-full gap-5">

            <Flex
                className="
                    w-[40%]
                    flex-col
                    h-full
                    gap-2
                "   
            >

                <p>
                    Address: Laila Tower, Salem Al Mubarak St، Al Salmiya
                </p>

                <p>
                    Telephone: +965 93109453
                </p>

                <p
                    style={{
                        fontWeight:'bold'
                    }}
                >
                    Hours of Operation:
                </p>

                <Flex 
                    className="
                        flex-col 
                    "
                    style={{
                        marginLeft:'5%'
                    }}
                    
                >

                    {operationHours.map((item,i) => (
                        
                        <Flex key={i} justify={"space-between"}>

                            <p
                                style={{
                                    fontWeight:'bold'
                                }}
                            >
                                {item.day}
                            </p>

                            <p>
                                {item.time}

                            </p>

                        </Flex>
                    ))}

                </Flex>

                <p>
                    Parking: parking information.
                </p>
                
                <Flex className="justify-end items-center gap-5">

                    <Button className="button" style={{"--button-bg": "black", padding:'20px'}}>
                        Call Us
                        <FaPhoneAlt />
                    </Button>

                    <Button className="button" style={{"--button-bg": "#25D366", padding:'20px'}}>
                        WhatsApp Us
                        <FaWhatsapp />
                    </Button>

                    

                </Flex>

                




            </Flex>

            <Flex
                className="
                    w-[60%]
                    items-center
                    justify-center
                    h-full
                    bg-green-500

                "
            >

                <h2 className="secondary_header">
                    Map Component
                </h2>

                


                
            </Flex>

        </Flex>
        
        
    </div>
  )
}

export default Location
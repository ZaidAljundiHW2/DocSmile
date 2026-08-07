import { FaUserDoctor } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { TbUrgent } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";
import { Flex } from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react";

const PatientInfo = () => {

    const pfblock = [
        {
            "name": "First Visit",
            "icon": FaUserDoctor,
            "link": "",
            "bg":'red'
        },

        {
            "name": "FAQs",
            "icon": FaQuestion,
            "link": "",
            "bg":"yellow"
        },

        {
            "name": "Urgent Concerns",
            "icon": TbUrgent,
            "link":"",
            "bg":"red"
        },

        {
            "name":"Location, Parking, Hours",
            "icon": FaLocationArrow,
            "link":"",
            "bg":"yellow"
        }
    ]

  return (
    <div
        className='
            bg-white
            flex
            gap-5
        '

        style={{
            padding:'20px'
        }}
    >

        {pfblock.map((item, i) => (

            <Flex
                className="
                    flex-1
                    items-center
                    justify-center
                    flex-col
                    rounded-full
                    text-center
                    scale-90
                    hover:scale-100
                    transition-transform
                "

                style={{
                    borderWidth:'2px',
                    color:'#071f97',
                    padding:'5px'
                }}

                
            >
                
                <Icon 
                    as={item.icon} 
                    boxSize={10}
                    color={"#071f97"}
                />
                
                <h1 
                    style={{
                        fontWeight:'bold', 
                        color:'#071f97',
                        fontSize: "clamp(1.2rem, 1.5vw, 2rem)" 
                    }}>
                    {item.name}
                </h1>
                

            </Flex>
        ))}
        
    </div>
  )
}

export default PatientInfo
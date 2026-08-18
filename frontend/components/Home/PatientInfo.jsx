import { FaUserDoctor } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { TbUrgent } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";
import { Flex, SimpleGrid } from '@chakra-ui/react';

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
            
            
        '

        style={{
            padding:'20px'
        }}
    >

        <SimpleGrid columns={{base:2, md:4}} style={{ gridAutoRows: '1fr' }} className="w-full">
            {pfblock.map((item, i) => {

                const IconComponent = item.icon;
                
                return (
                    <Flex
                        className="
                            h-full
                            w-full
                            items-center
                            justify-center
                            flex-col
                            rounded-full
                            text-center
                            scale-90
                            hover:scale-100
                            transition-transform
                            cursor-pointer
                            md:p-5
                            p-2
                        "
                        key={i}

                        style={{
                            borderWidth:'2px',
                            color:'#071f97',
                        }}

                        
                    >
                        
                        <IconComponent
                            size="40"
                            color="#071f97"
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

                )

                
            })}

        </SimpleGrid>

        
        
    </div>
  )
}

export default PatientInfo
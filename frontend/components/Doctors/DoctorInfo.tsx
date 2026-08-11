'use client'
import React from 'react'
import { GrUserExpert } from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

const DoctorInfo = ({ 
    specialty, 
    languages, 
    biography, 
    qualifications,
    education
} : {
    specialty:string,
    languages:string,
    biography:string,
    qualifications:string[],
    education: string
}) => {

    const biographyBlocks = biography.split('\n');
    const educationBlocks = education.split('\n');

    const infoBlocks = [

        {
            "header": "Specialty",
            "value": specialty,
            "icon": GrUserExpert
        },

        {
            "header": "Languages",
            "value": languages,
            "icon": FaLanguage
        },

        {
            "header": "Biography",
            "value": biographyBlocks,
            "icon": BsBook
        },

        {
            "header": "Qualifications",
            "value": qualifications,
            "icon": RiVerifiedBadgeFill
        },

        {
            "header": "Education",
            "value": educationBlocks,
            "icon": RiGraduationCapFill
        }



    ]

    

  return (
    <div
        className='
            doctorprofilecontainer
            p-10
            flex-col
            bg-[#f2eeee]
            gap-5
            
        '
    >
        
        {infoBlocks.map((item,i) => (

            (item.value && (
                <Flex
                    key={i}
                    className='
                        px-10
                        justify-center
                        gap-5
                        divide-y-4 divide-y-reverse divide-gray-200
                        color-[#808080]
                        w-full
                        flex-col
                        

                    '

                    
                >
                    <Flex 
                        className='
                            items-center
                            gap-5
                        '
                    >
                        <Icon as={item.icon} className='secondary_header'/>

                        <h2 className='secondary_header'>
                            {item.header}:

                        </h2>

                        {item.header !== "Biography" && item.header !== "Qualifications" && item.header !== "Education" && (
                            <h2 className='secondary_header'>
                                {item.value}
                            </h2>
                        )}

                    </Flex>

                    {item.header !== "Specialty" && item.header !== "Languages" && (
                        <Flex
                            className='
                                px-10
                                flex-col
                            '
                        >
                            {item.value.map((item,i) => (
                                <p 
                                    key={i}
                                    className='
                                        ml-10
                                    '
                                >
                                    {item}
                                </p>
                            ))}

                        </Flex>
                    )}
                    

                </Flex>

            ))
            
        ))}
        
    </div>
  )
}

export default DoctorInfo
'use client'
import React from 'react'
import { GrUserExpert } from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaMagnifyingGlass } from "react-icons/fa6";

const DoctorInfo = ({ 
    specialty, 
    languages, 
    biography, 
    qualifications,
    education,
    interests
} : {
    specialty:string,
    languages:string[],
    biography:string,
    qualifications:string[],
    education: string,
    interests: string[]
}) => {

    const biographyBlocks = biography.split('\n');
    const educationBlocks = education.split('\n');
    const languagesString = languages.join(' - ');
    const interestsString = interests.join(' - ');

    const infoBlocks = [

        {
            "header": "Specialty",
            "value": specialty,
            "icon": GrUserExpert
        },

        {
            "header": "Languages",
            "value": languagesString,
            "icon": FaLanguage
        },

        {
            "header": "Clinical Interests",
            "value": interestsString,
            "icon": FaMagnifyingGlass
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
        },

        



    ]

    

  return (
    <div
        className='
            doctorprofilecontainer
            md:p-10
            p-2
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
                            items-start
                        '
                        style={{
                            flexDirection: item.header === "Clinical Interests" ? 'column' : 'row',
                            gap: item.header === "Clinical Interests" ? 0 : 20
                        }}
                    >
                        <Flex
                            className='
                                gap-5
                                items-center
                            '

                            
                        >
                            <Icon as={item.icon} className='secondary_header'/>

                            <h2 className='secondary_header text-nowrap '>
                                {item.header}:

                            </h2>

                        </Flex>
                        

                        {item.header !== "Biography" && item.header !== "Qualifications" && item.header !== "Education" && (
                            <h2 className='secondary_header'>
                                {item.value}
                            </h2>
                        )}

                    </Flex>

                    {item.header !== "Specialty" && item.header !== "Languages" && item.header !== "Clinical Interests" && (
                        <Flex
                            className='
                                md:pl-10
                                pl-5
                                flex-col
                            '
                        >
                            {(item.value as string[]).map((item, i) => (
                                <p 
                                    key={i}
                                    className='
                                        md:ml-10
                                        ml-5
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
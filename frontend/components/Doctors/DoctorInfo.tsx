import React from 'react'
import { GrUserExpert } from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Flex } from '@chakra-ui/react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Doctor } from '@/payload-types';
import { getTranslations } from 'next-intl/server';

const DoctorInfo = async({doctor} : { doctor : Doctor}) => {

    const biographyBlocks = doctor.biography.split('\n');
    const qualifications = doctor.qualifications.map((item) => item.Qualification);
    const educationBlocks = doctor.education?.split(',');
    const languagesString = doctor.languages.map((item) => item.language).join(" ");
    const interestsString = doctor.clinicalInterests.map((item) => item.clinicalInterest).join(' - ');

    const t = await getTranslations('doctors.doctorTemplate');

    const doctorInfo = t.raw('doctorInfo.headers');

    const infoBlocks = [

        {
            "header": doctorInfo[0],
            "value": doctor.specialty,
            "icon": GrUserExpert
        },

        {
            "header": doctorInfo[1],
            "value": languagesString,
            "icon": FaLanguage
        },

        {
            "header": doctorInfo[2],
            "value": interestsString,
            "icon": FaMagnifyingGlass
        },

        {
            "header": doctorInfo[3],
            "value": biographyBlocks,
            "icon": BsBook
        },

        {
            "header": doctorInfo[4],
            "value": qualifications,
            "icon": RiVerifiedBadgeFill
        },

        {
            "header": doctorInfo[5],
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
                            <item.icon className='secondary_header'/>

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
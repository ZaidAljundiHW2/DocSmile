import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { FaQuestionCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import BookButton from '../Misc/BookButton';

const DoctorHeader = ({img, name, title} : {img:string, name:string, title:string}) => {

  return (
    <div
        className='
            doctorprofilecontainer
            p-10
        '
    >
        <Flex
            className='
                gap-5
                items-center
                justify-center
                w-full
            '
        >

            <img 
                src={img}
                className='
                    rounded-full
                    w-[200px]
                    h-auto
                '

            />

            <Flex
                className='
                    flex-col
                '
            >
                <h1
                    className='
                        main_header
                    '
                    style={{
                        color:'black'
                    }}
                >
                    {name}

                </h1>

                <h2
                    className='
                        secondary_header
                    '
                >
                    {title}

                </h2>

            </Flex>

            <Flex
                className='
                    ml-auto
                    gap-5
                '
            >
                <Button
                    className='
                        button
                    '

                    style={{ "--button-bg": "#071f97" } as React.CSSProperties}
                >
                    Ask Question

                    <FaQuestionCircle />

                </Button>

                <BookButton />

            </Flex>

        </Flex>

        
    </div>
  )
}

export default DoctorHeader
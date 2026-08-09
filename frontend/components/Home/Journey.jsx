import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

const journeySteps = [
    {
        title: "Contact Doctor Smile",
        description: "Reach out to our team by phone, WhatsApp, or online form to get started."
    },
    {
        title: "Request a Suitable Appointment",
        description: "We'll find a time that works around your schedule."
    },
    {
        title: "Attend an Assessment",
        description: "Meet your clinician for a full evaluation of your needs."
    },
    {
        title: "Receive an Individualized Treatment Plan",
        description: "Where indicated, we'll outline a plan tailored to you."
    },
    {
        title: "Decide on the Next Step",
        description: "Discuss options with the clinical team and choose your path forward."
    },
]

const Journey = () => {
    return (
        <div
            className='
                flex
                bg-white
                min-h-[60vh]
                items-center
                flex-col
            '
            style={{
                padding: '20px'
            }}
        >

            <h1 className='main_header'>
                Your Journey With Us
            </h1>

            {/* steps container */}
            <Flex
                className='
                    w-full
                    flex-col
                    md:flex-row
                    items-stretch
                '
                style={{
                    marginTop: '40px'
                }}
            >

                {journeySteps.map((step, i) => (

                    <React.Fragment key={i}>

                        {i !== 0 && (
                            <Box
                                className='
                                    bg-[#071f97]
                                '
                                style={{
                                    opacity: 0.2,
                                    height: '1px',
                                    margin: '20px 0'
                                }}
                                display={{ base: "block", md: "none" }}
                            />
                        )}
                        {i !== 0 && (
                            <Box
                                className='
                                    bg-[#071f97]
                                '
                                style={{
                                    opacity: 0.2,
                                    width: '1px',
                                    margin: '0 20px'
                                }}
                                display={{ base: "none", md: "block" }}
                            />
                        )}

                        <Flex
                            className='
                                flex-col
                                items-center
                                text-center
                                flex-1
                                gap-2
                            '
                        >
                            <span
                                className='secondary_header'
                                style={{ color: '#071f97' }}
                            >
                                {i + 1}
                            </span>

                            <h2 className='secondary_header'>
                                {step.title}
                            </h2>

                            <p className='secondary_text'>
                                {step.description}
                            </p>
                        </Flex>

                    </React.Fragment>

                ))}

            </Flex>

        </div>
    )
}

export default Journey
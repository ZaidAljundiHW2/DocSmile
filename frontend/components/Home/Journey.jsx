import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { getTranslations } from 'next-intl/server'



const Journey = async() => {

    const t = await getTranslations('home');
    const stepsJSON = t.raw('journey.steps');

    const journeySteps = [
        {
            title: stepsJSON[0].title,
            description: stepsJSON[0].desc
        },
        {
            title: stepsJSON[1].title,
            description: stepsJSON[1].desc
        },
        {
            title: stepsJSON[2].title,
            description: stepsJSON[2].desc
        },
        {
            title: stepsJSON[3].title,
            description: stepsJSON[3].desc
        },
        {
            title: stepsJSON[4].title,
            description: stepsJSON[4].desc
        },
    ]
    
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
                {t('journey.header')}
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
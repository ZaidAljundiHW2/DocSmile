import React from 'react'
import { Flex } from '@chakra-ui/react'
import { IoSparklesSharp } from "react-icons/io5";
import './Services.css'

interface BenefitItem {
    header: string,
    subheader: string
}

interface ServiceBenefitsContent {

    section: string,
	header: string,
	paragraphs: string[],
    benefits: BenefitItem[],
    video: string

}

interface ServiceBenefitsProp {

    ServiceBenefitObj: ServiceBenefitsContent
}

const ServiceBenefits = ({ ServiceBenefitObj } : ServiceBenefitsProp) => {


    const splitArray = (arr) => {

        const leftHalf = arr.slice(0, Math.floor(arr.length / 2));
        const rightHalf = arr.slice(Math.floor(arr.length/2));

        return [leftHalf, rightHalf];
    }

    const [leftHalf, rightHalf] = splitArray(ServiceBenefitObj.benefits);

  return (
    <div
        className='
            servicecontainer
            p-20
            gap-10
            flex-col
            h-[60vh]
            
            
        '

      
    >
        <Flex className='flex-col'>
            <h2 className='secondary_header'>
                {ServiceBenefitObj.section}
            </h2>

            <h1 className='main_header' style={{color:'black'}}>
                {ServiceBenefitObj.header}
            </h1>

        </Flex>
        

        <div className='w-full h-full flex gap-5'>
            {/* left half */}
            <Flex 
                className='
                    flex-1 
                    flex-col
                    gap-5
                    justify-center
                '
            >

                {leftHalf.map((item,i) => (

                    <Flex
                        key={i}
                        className='
                            items-center
                            justify-center
                        '
                    >

                        <Flex className='flex-col'>
                            <h3 className='text-black font-bold'>
                                {item.header}
                            </h3>

                            <p>
                                {item.subheader}
                            </p>
                        </Flex>

                        <IoSparklesSharp 
                            color='black' 
                            size={32}
                            className='
                                ml-auto
                            '
                        />

                    </Flex>
                ))}

            </Flex>

            {/* video */}
            <Flex 
                className='
                    flex-1
                    items-center
                    justify-center
                '
            >
                <video 
                    src={ServiceBenefitObj.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='
                        rounded-full
                        aspect-square
                        max-h-full
                        w-auto
                        object-cover
                    '
                />

            </Flex>

            {/* right half */}
            <Flex 
                className='
                    flex-1 
                    flex-col
                    justify-center
                    gap-5
                '
            >

                {rightHalf.map((item,i) => (

                    <Flex
                        key={i}

                        className='
                            items-center
                            justify-center
                        '
                        
                    >

                        <Flex className='flex-col'>
                            <h3 className='text-black font-bold'>
                                {item.header}
                            </h3>

                            <p>
                                {item.subheader}
                            </p>
                        </Flex>

                        <IoSparklesSharp 
                            size={32} 
                            color='black'
                            className='
                                ml-auto
                            '
                        />

                    </Flex>
                ))}

            </Flex>

        </div>
        
        
    </div>
  )
}

export default ServiceBenefits
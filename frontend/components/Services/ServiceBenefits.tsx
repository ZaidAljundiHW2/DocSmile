import React from 'react'
import { Flex } from '@chakra-ui/react'
import { IoSparklesSharp } from "react-icons/io5";
import './Services.css'
import { Service } from '@/payload-types'
import { getTranslations } from 'next-intl/server';

interface BenefitItem {

    header:string,
    benefit:string,
    id:string
}

const ServiceBenefits = async({ service } : {service : Service }) => {


    const splitArray = async(arr: BenefitItem[]) => {

        const leftHalf = arr.slice(0, Math.floor(arr.length / 2));
        const rightHalf = arr.slice(Math.floor(arr.length/2));

        return [leftHalf, rightHalf];
    }

    const [leftHalf, rightHalf] = await splitArray(service.content?.benefits);

    const t = await getTranslations('services.serviceTemplate.benefits');

  return (
    <div
        className='
            servicecontainer
            md:p-10
            p-5
            md:gap-10
            gap-5
            flex-col
            h-auto
            md:text-start
            text-center
        '

      
    >
        <Flex className='flex-col'>
            <h2 className='secondary_header'>
                {t('header')}
            </h2>

            <h1 className='main_header' style={{color:'black'}}>
                {service.content?.benefitsHeader}
            </h1>

        </Flex>
        

        <div className='w-full flex md:flex-row flex-col gap-10 md:gap-5'>
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
                                {item.benefit}
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
                    order-first
                    md:order-none
                '
            >
                <video 
                    src={service.content?.video?.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='
                        rounded-full
                        aspect-square
                        w-[65%]
                        max-w-[280px]
                        mx-auto
                        md:w-full
                        md:max-w-[75%]
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
                                {item.benefit}
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
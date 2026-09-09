import React from 'react'
import { Flex } from '@chakra-ui/react'
import BookButton from '../Misc/BookButton'
import WhatsappButton from '../Misc/WhatsappButton'
import CallButton from '../Misc/CallButton'
import { Campaign } from '@/payload-types'
import { getLocale } from 'next-intl/server'

const CampaignHero = async ({ campaign }: { campaign: Campaign }) => {

    const locale = await getLocale()

    const formatDate = (date: string | null | undefined) => {
        if (!date) return ''

        const parsedDate = new Date(date)

        return new Intl.DateTimeFormat(locale === 'ar' ? 'ar' : 'en', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).format(parsedDate)
    }

    return (
        <div
            className='
                relative
                flex
                justify-center
                items-center
                h-[100vh]
                w-full
                flex-col
            '
        >

            {typeof campaign.image === 'object' && campaign.image && (
                <img 
                    src={campaign.image.url ?? ''}
                    alt={campaign.mainHeader ?? ''}
                    className='
                        absolute
                        inset-0
                        w-full
                        h-full
                        z-0
                        object-cover
                    '
                />
            )}

            <div
                className='
                    absolute
                    inset-0
                    bg-black/40
                    z-0
                '
            />

            <div
                className='
                    z-1
                    flex
                    justify-center
                    items-center
                    flex-col
                    gap-5
                '
            >

                <h1
                    className='
                        text-white
                        main_header
                    '

                    style={{
                        color:'white'
                    }}
                >
                    {campaign.mainHeader}
                </h1>

                <h2
                    className='
                        text-white
                        secondary_header
                    '

                    style={{
                        color:'white'
                    }}
                >
                    {campaign.secondaryHeader}

                </h2>

                <Flex className='flex-col justify-center items-center' gap={{base:'5'}}>
                
                    <h2 
                        className='
                            secondary_header
                        '

                        style={{
                            color:'white'
                        }}
                    >
                        Book now
                    </h2>

                    <Flex gap={{base:'5'}} className='md:flex-row flex-col'>

                        <BookButton />

                        <WhatsappButton />

                        <CallButton />

                    </Flex>
                    
                </Flex>

                <h2
                    className='
                        secondary_header
                    '

                    style={{
                        color:'white'
                    }}
                >
                    {formatDate(campaign.startDate)}
                    {' - '}
                    {formatDate(campaign.endDate)}
                </h2>

            </div>
            
        </div>
    )
}

export default CampaignHero
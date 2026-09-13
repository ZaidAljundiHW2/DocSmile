
'use client'
import { Flex, Button } from '@chakra-ui/react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl';
import WhatsappButton from '@/components/Misc/WhatsappButton';
import CallButton from '@/components/Misc/CallButton';
import { useEffect, useState } from 'react';
import { getTelNumberAction, getWhatsappNumberAction } from '@/lib/actions'

const ErrorPage = () => {

  

    const t = useTranslations('error')
    const tButtons = useTranslations('buttons')
    const tMisc = useTranslations('misc')

    const [telNum, setTelNum] = useState<string | null | undefined>()
    const [wNum, setWNum] = useState<string | null | undefined>()

    useEffect(() => {
        getTelNumberAction().then(setTelNum).catch(() => {});
        getWhatsappNumberAction().then(setTelNum).catch(() => {})
    }, [])

  return (
    <div
        className='
            bg-white
            z-9999
            p-20
            flex
            md:flex-row
            flex-col
            items-center
            justify-center
            absolute
            inset-0
            gap-5
            overflow-hidden
        '
    >
        <Flex
            className='
                flex-col
                md:order-none
                order-2
                gap-5
            '
        >

            <h1
                className='
                    main_header
                '
            >
                {t('title')}
            </h1>

            <h2
                className='
                    secondary_header
                '
            >
                {t('header')}
            </h2>

            <p className='text-xs text-[#808080]'>
				{tMisc('confPages.more')}
			</p>

            <Flex className='gap-5'>

                <WhatsappButton number={wNum}/>

                <CallButton number={telNum}/>

            </Flex>

            <Link href={'/'}>
            
                <Button
                    className='button'
                    style={{
                        "--button-bg": "#071f97",
                    } as React.CSSProperties}
                >
                    {tButtons('home')}
                </Button>
            </Link>

        </Flex>

        <Flex
            className='
                md:order-none
                order-1
            '
        >
            <img src={'/icons/company-logo.png'}/>
        </Flex>
    </div>
  )
}

export default ErrorPage
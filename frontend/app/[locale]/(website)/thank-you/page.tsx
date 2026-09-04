import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server';

const ThankYouPage = async () => {

  const t = await getTranslations('thankYou');
  const tButtons = await getTranslations('buttons');

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
                md:order-none order-2
                gap-5
            '
        >

            <h1
                className='
                    main_header
                '
            >
                {t('header')}
            </h1>

            <h2
                className='
                    secondary_header
                '
            >
                {t('subheader')}
            </h2>

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

        <Flex className='md:order-none order-1'>
            <img src={'/icons/company-logo.png'}/>
        </Flex>
    </div>
  )
}

export default ThankYouPage
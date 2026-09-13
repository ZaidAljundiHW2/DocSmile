import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server';
import WhatsappButton from '@/components/Misc/WhatsappButton';
import CallButton from '@/components/Misc/CallButton';
import { getTelNumber, getWhatsAppNumber } from '@/lib/payloadFetches';

const ThankYouPage = async () => {

  const t = await getTranslations('thankYou');
  const tButtons = await getTranslations('buttons');
  const tMisc = await getTranslations('misc');
  const telNum = await getTelNumber();
  const wNum = await getWhatsAppNumber();

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
                md:order-1 
                order-2
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

            <p className='text-xs text-[#808080]'>
				{tMisc('confPages.reception')}
			</p>

            <p className='text-xs text-[#808080]'>
				{tMisc('confPages.more')}
			</p>

            <Flex className='gap-5'>

                <WhatsappButton number={wNum}/>

                <CallButton number={telNum}/>

            </Flex>

            <Link href={'/'} className='self-start'>
            
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
        
        

        <Flex className='md:order-2 order-1'>
            <img src={'/icons/company-logo.png'}/>
        </Flex>
    </div>
  )
}

export default ThankYouPage
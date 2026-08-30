import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import Link from 'next/link'

const ThankYouPage = () => {
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
                Thank You!
            </h1>

            <h2
                className='
                    secondary_header
                '
            >
                We will get in touch with you soon.
            </h2>

            <Link href={'/'}>
            
                <Button
                    className='button'
                    style={{
                        "--button-bg": "#071f97",
                    } as React.CSSProperties}
                >
                    Home
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

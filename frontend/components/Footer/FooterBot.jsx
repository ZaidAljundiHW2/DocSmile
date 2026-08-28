import { Flex, Box } from "@chakra-ui/react"
import Link from "next/link"

const FooterBot = () => {
  return (
    <div
        className='
            bg-white
            flex
            flex-col
            md:flex-row
            items-center
            gap-4
            md:gap-0
            p-6
            md:p-5
            text-center
        '
    >

        <Flex
            className="
                md:flex-1
                justify-center
                items-center
            "
        >
            <h1 className="text-sm md:text-base">
                &copy; 2026 Doctor Smile Dental Center. All Rights Reserved
            </h1>
        </Flex>

        <Box className="hidden md:block w-[1px] self-stretch bg-gray-500 opacity-25" style={{margin: "0 20px"}}/>

        <Flex
            className="
                md:flex-1
                flex-col
                sm:flex-row
                items-center
                gap-2
                sm:gap-0
            "
            justify={{ base: 'center', md: 'end' }}
        >

            <Link href={'/Legal/TOS'}>
                <h1 className="text-sm md:text-base">
                    Terms of Service
                </h1>
            </Link>
            

            <Box className="hidden sm:block w-[1px] bg-gray-500 opacity-25" style={{margin: "0 20px"}}/>

            <Link href={'/Legal/PrivacyPolicy'}>
                <h1 className="text-sm md:text-base">
                    Privacy Policy
                </h1>
            </Link>
            

            <Box className="hidden sm:block w-[1px] bg-gray-500 opacity-25" style={{margin: "0 20px"}}/>

            <Link href={'/Legal/CookiePolicy'}>
                <h1 className="text-sm md:text-base">
                    Cookie Policy
                </h1>
            </Link>
            

        </Flex>

    </div>
  )
}

export default FooterBot
"use client"
import { Flex, Box } from "@chakra-ui/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useLocale } from "next-intl"

const LanguageSwitch = () => {
    const locale = useLocale()
    const isArabic = locale === "ar"

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    const switchLocale = () => {
        const newLocale = isArabic ? "en" : "ar"

        // pathname looks like "/en/Services/some-slug" -> segments[0] is "",
        // segments[1] is the locale prefix.
        const segments = pathname.split("/")
        segments[1] = newLocale
        const newPath = segments.join("/") || "/"

        const query = searchParams.toString()

        router.push(query ? `${newPath}?${query}` : newPath)
    }

    return (
        <Flex
            dir="ltr"
            className="
                relative
                items-center
                cursor-pointer
                select-none
            "
            onClick={switchLocale}
            style={{
                width: '90px',
                height: '36px',
                borderRadius: '999px',
                border: '1px solid #071f97',
                padding: '3px'
            }}
        >
            <Box
                className="
                    absolute
                    transition-all
                "
                style={{
                    top: '3px',
                    left: isArabic ? '47px' : '3px',
                    width: '40px',
                    height: '28px',
                    borderRadius: '999px',
                    backgroundColor: '#071f97'
                }}
            />

            <Flex className="flex-1 items-center justify-center z-10">
                <span
                    style={{
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        color: !isArabic ? 'white' : '#071f97'
                    }}
                >
                    EN
                </span>
            </Flex>

            <Flex className="flex-1 items-center justify-center z-10">
                <span
                    style={{
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        color: isArabic ? 'white' : '#071f97'
                    }}
                >
                    عربي
                </span>
            </Flex>
        </Flex>
    )
}

export default LanguageSwitch
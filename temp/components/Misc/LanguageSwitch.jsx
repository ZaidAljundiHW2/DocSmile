"use client"
import { useState } from "react"
import { Flex, Box } from "@chakra-ui/react"

const LanguageSwitch = () => {
    const [isArabic, setIsArabic] = useState(false)

    return (
        <Flex
            className="
                relative
                items-center
                cursor-pointer
                select-none
            "
            onClick={() => setIsArabic(!isArabic)}
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
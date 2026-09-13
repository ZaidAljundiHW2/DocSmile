import React from 'react'
import { Accordion, Span } from "@chakra-ui/react"
import { getLocale } from 'next-intl/server'

interface FQAItem {
    id: string,
    question: string,
    answer: string
}

interface FAQCompProps {
    FAQObj: FQAItem[]
}

const FAQComp = async ({ FAQObj }: FAQCompProps) => {

    const locale = await getLocale()

    return (
        <div className='md:w-[80%] w-full mx-auto'>
            <Accordion.Root
                collapsible
                defaultValue={["b"]}
                dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
                {FAQObj.map((item, index) => (
                    <Accordion.Item key={index} value={item.question}>
                        <Accordion.ItemTrigger
							display="flex"
							flexDirection={locale === 'ar' ? 'row-reverse' : 'row'}
							justifyContent="space-between"
						>
							<Span color="black">
								{item.question}
							</Span>

							<Accordion.ItemIndicator />
						</Accordion.ItemTrigger>

                        <Accordion.ItemContent>
                            <Accordion.ItemBody color="black" textAlign={locale === 'ar' ? 'right' : 'left'}>
                                {item.answer}
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    )
}

export default FAQComp
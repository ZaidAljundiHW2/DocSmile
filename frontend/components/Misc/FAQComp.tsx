import React from 'react'
import { Accordion, Span } from "@chakra-ui/react"

interface FQAItem {
  	question: string,
	answer: string
}

interface FAQCompProps {
	FAQObj: FQAItem[]
}

const FAQComp = ({ FAQObj } : FAQCompProps) => {
  return (
    <div className='w-[80%] mx-auto'>
		<Accordion.Root collapsible defaultValue={["b"]}>
			{FAQObj.map((item, index) => (
				<Accordion.Item key={index} value={item.question}>
					<Accordion.ItemTrigger>
						<Span flex="1" color={'black'}>{item.question}</Span>
						<Accordion.ItemIndicator />
					</Accordion.ItemTrigger>
					<Accordion.ItemContent>
						<Accordion.ItemBody color={'black'}>{item.answer}</Accordion.ItemBody>
					</Accordion.ItemContent>
				</Accordion.Item>
			))}
			</Accordion.Root>
	</div>
  )
}

export default FAQComp
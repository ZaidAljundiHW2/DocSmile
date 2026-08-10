import React from 'react'
import FAQComp from '../Misc/FAQComp'

interface FQAItem {
  	question: string,
	answer: string
}

interface FAQCompProps {
	FQAObj: FQAItem[]
}

const ServiceFQAs = ({ FQAObj } : FAQCompProps) => {
  return (
    <div
        className='
            servicecontainer
            p-10
            flex-col
            gap-10
        '
    >
        <h1
            className='
                main_header
            '
            style={{
                color:'black'
            }}
        >
            Frequently Asked Questions
        </h1>
        <FAQComp FQAObj={FQAObj}/>
        
    </div>
  )
}

export default ServiceFQAs
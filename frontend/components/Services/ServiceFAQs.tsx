import React from 'react'
import FAQComp from '../Misc/FAQComp'

interface FQAItem {
  	question: string,
	answer: string
}

interface FAQCompProps {
	FAQObj: FQAItem[]
}

const ServiceFQAs = ({ FAQObj } : FAQCompProps) => {
  return (
    <div
        className='
            servicecontainer
            md:p-10
            p-5
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
        <FAQComp FAQObj={FAQObj}/>
        
    </div>
  )
}

export default ServiceFQAs
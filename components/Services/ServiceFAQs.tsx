import React from 'react'
import FAQComp from '../Misc/FAQComp'
import { getTranslations } from 'next-intl/server'

interface FQAItem {
    id:string,
  	question: string,
	answer: string
}

interface FAQCompProps {
	FAQObj: FQAItem[]
}

const ServiceFQAs = async({ FAQObj } : FAQCompProps) => {

    const t = await getTranslations('services.serviceTemplate.FAQs');

  return (
    <div
        className='
            servicecontainer
            md:p-10
            p-5
            flex-col
            md:gap-10
            gap-5
            md:text-start
            text-center
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
            {t('header')}
        </h1>

        <FAQComp FAQObj={FAQObj}/>
        
    </div>
  )
}

export default ServiceFQAs
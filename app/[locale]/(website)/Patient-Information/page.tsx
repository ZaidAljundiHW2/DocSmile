import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import FirstVisit from '@/components/PatientInformation/FirstVisit'
import PatientFAQs from '@/components/PatientInformation/PatientFAQs'
import UrgentCTA from '@/components/Home/UrgentCTA'
import Location from '@/components/Misc/Location'
import { getTranslations } from 'next-intl/server'
import { getLocale } from 'next-intl/server'
import { getGenDetails, getPatientInformation } from '@/lib/payloadFetches'


const PatientInformation = async() => {

  const locale = await getLocale() as 'en' | 'ar' | 'all';

  const t = await getTranslations('patientInformation')

  const [genDetails, patientInfo] = await Promise.all([
    getGenDetails(locale),
    getPatientInformation(locale)
  ])
  

  return (
    <div>
        <ComponentSubheader heading={t('header')}/>

        <FirstVisit text={patientInfo.firstVisit ?? ''}/>

        <PatientFAQs
            FAQs={{
                FAQObj: (patientInfo.FAQs ?? []).map(faq => ({
                    id: faq.id ?? '',
                    question: faq.question ?? '',
                    answer: faq.answer ?? ''
                }))
            }}
        />

        <UrgentCTA footerHours={genDetails.footerHours} />

        <Location genDetails={genDetails}/>
        
    </div>
  )
}

export default PatientInformation
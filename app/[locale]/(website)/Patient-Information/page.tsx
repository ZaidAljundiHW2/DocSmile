import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import FirstVisit from '@/components/PatientInformation/FirstVisit'
import PatientFAQs from '@/components/PatientInformation/PatientFAQs'
import UrgentCTA from '@/components/Home/UrgentCTA'
import Location from '@/components/Misc/Location'
import HashScroll from '@/utils/HashScroll'
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
        <HashScroll />

        <ComponentSubheader heading={t('header')}/>

		<section id='PIFV' className='scroll-target'>
	        <FirstVisit text={patientInfo.firstVisit ?? ''}/>
		</section>

		<section id='PIFAQ' className='scroll-target'>
			<PatientFAQs
				FAQs={{
					FAQObj: (patientInfo.FAQs ?? []).map(faq => ({
						id: faq.id ?? '',
						question: faq.question ?? '',
						answer: faq.answer ?? ''
					}))
				}}
			/>
		</section>

        <section id='PIUCTA' className='scroll-target'>
			<UrgentCTA footerHours={genDetails.footerHours} />
		</section>

		<section id='PIL' className='scroll-target'>
	        <Location genDetails={genDetails}/>
		</section>

    </div>
  )
}

export default PatientInformation
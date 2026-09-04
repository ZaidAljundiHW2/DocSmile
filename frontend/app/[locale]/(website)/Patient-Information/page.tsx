import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import FirstVisit from '@/components/PatientInformation/FirstVisit'
import PatientFAQs from '@/components/PatientInformation/PatientFAQs'
import UrgentCTA from '@/components/Home/UrgentCTA'
import Location from '@/components/Home/Location'
import { getTranslations } from 'next-intl/server'

async function getGenDetails() {

	try {
			
		const req = await fetch(`${process.env.API_URL}/api/globals/clinic-general-information`);

		if (!req.ok) {
			throw new Error("Unable to fetch socials");
		}

		const jsonData = await req.json();
		
		return jsonData;


	} catch (error) {
		console.error(error);
	}


}


async function getPatientInfo() {
  

	try {

      const res = await fetch(`${process.env.API_URL}/api/globals/patient-information`);

      if (!res.ok) {
        throw new Error('could not fetch patient information');
      }

      const jsonData = await res.json();
      return jsonData;
      
    } catch (error) {
      console.error(error);
    }


}

const PatientInformation = async() => {

  const t = await getTranslations('patientInformation')

  const [genDetails, patientInfo] = await Promise.all([
    getGenDetails(),
    getPatientInfo()
  ])
  

  return (
    <div>
        <ComponentSubheader heading={t('header')}/>

        <FirstVisit text={patientInfo.firstVisit}/>

        <PatientFAQs FAQs={patientInfo.FAQs} />

        <UrgentCTA footerHours={genDetails.footerHours} />

        <Location genDetails={genDetails}/>
        
    </div>
  )
}

export default PatientInformation
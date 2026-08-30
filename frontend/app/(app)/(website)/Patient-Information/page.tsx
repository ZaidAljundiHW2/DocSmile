"use client"
import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import FirstVisit from '@/components/PatientInformation/FirstVisit'
import PatientFAQs from '@/components/PatientInformation/PatientFAQs'
import UrgentCTA from '@/components/Home/UrgentCTA'
import Location from '@/components/Home/Location'
import { useState, useEffect } from 'react'

const PatientInformation = () => {

  const [loading, setLoading] = useState(true);
  const [genDetails, setGenDetails] = useState();
  const [patientInfo, setPatientInfo] = useState();

  const getGenDetails = async() => {
		try {
			
			const req = await fetch('/api/globals/clinic-general-information');

			if (!req.ok) {
				throw new Error("Unable to fetch socials");
			}

			const jsonData = await req.json();
			console.log(jsonData);
			setGenDetails(jsonData);


		} catch (error) {
			console.error(error);
		}
	}

  const getPatientInfo = async() => {

    try {

      const res = await fetch('/api/globals/patient-information');

      if (!res.ok) {
        throw new Error('could not fetch patient information');
      }

      const jsonData = await res.json();
      console.log('V');
      console.log(jsonData);
      setPatientInfo(jsonData);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
  
    const load = async() => {

      await getGenDetails();
      await getPatientInfo();
      setLoading(false);


    }

    load();

  },[]);

  
  

  if (loading) return <p>Loading...</p>

  

  return (
    <div>
        <ComponentSubheader heading={'Patient Information'}/>

        <FirstVisit text={patientInfo.firstVisit}/>

        <PatientFAQs FAQs={patientInfo.FAQs} />

        <UrgentCTA />

        <Location genDetails={genDetails}/>
        
    </div>
  )
}

export default PatientInformation
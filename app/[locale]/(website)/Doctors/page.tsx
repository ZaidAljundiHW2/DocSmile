import React from 'react'
import DoctorGrid from '@/components/Doctors/DoctorGrid'
import DoctorHero from '@/components/Doctors/DoctorHero'
import { getLocalizedPrefix } from '@/utils/getLocalizedPrefix';
import { getLocale } from 'next-intl/server';

async function getDoctors(locale : string) {

	try {

		const req = await fetch(`/api/doctors?locale=${locale}`);

		if (!req.ok) {

			throw new Error('Could not fetch doctors');

		}

		const jsonData = await req.json();
		
		return jsonData.docs;
	


	
	} catch (error) {
		console.error(error);
	}


}

const Doctors = async() => {

	const locale = await getLocale();

	
	const doctors = await getDoctors(locale);

	const localizedDoctors = doctors?.map((doctor: any) => ({
		...doctor,
		prefix: getLocalizedPrefix(doctor.prefix, locale),
	})) ?? [];

  return (
    <div>
        <DoctorHero /> 

        <DoctorGrid doctors={localizedDoctors}/>


        
    </div>
  )
}

export default Doctors
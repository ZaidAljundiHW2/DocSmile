import React from 'react'
import DoctorGrid from '@/components/Doctors/DoctorGrid'
import DoctorHero from '@/components/Doctors/DoctorHero'
import { getLocalizedPrefix } from '@/utils/getLocalizedPrefix';
import { getLocale } from 'next-intl/server';
import { getDoctors } from '@/lib/payloadFetches';



const Doctors = async() => {

	const locale = await getLocale() as 'en' | 'ar' | 'all';

	
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
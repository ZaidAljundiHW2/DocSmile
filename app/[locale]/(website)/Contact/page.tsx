import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ContactMain from '@/components/Contact/ContactMain'
import { getLocale } from 'next-intl/server';
import { getLocalizedPrefix } from '@/utils/getLocalizedPrefix';

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

const Contact = async() => {

	const locale = await getLocale();

  const doctors = await getDoctors(locale);

  const localizedDoctors = doctors?.map((doctor: any) => ({
		...doctor,
		prefix: getLocalizedPrefix(doctor.prefix, locale),
	})) ?? [];

  return (
    <div>

        <ComponentSubheader heading={'Contact Us'}/>

        <ContactMain doctors={localizedDoctors}/>
        
    </div>
  )
}

export default Contact
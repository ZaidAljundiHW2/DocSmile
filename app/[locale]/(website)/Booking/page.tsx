import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import BookingMain from '@/components/Booking/BookingMain'
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

async function getGenDetails(locale : string) {

	try {
			
		const req = await fetch(`/api/globals/clinic-general-information?locale=${locale}`);

		if (!req.ok) {
			throw new Error("Unable to fetch socials");
		}

		const jsonData = await req.json();
		
		return jsonData;


	} catch (error) {
		console.error(error);
	}


}

const Booking = async() => {

	const locale = await getLocale();

	
  const [doctors, genDetails] = await Promise.all([
    getDoctors(locale),
    getGenDetails(locale),
  ]);

  const localizedDoctors = doctors?.map((doctor: any) => ({
		...doctor,
		prefix: getLocalizedPrefix(doctor.prefix, locale),
	})) ?? [];

  return (
    <div>
        <ComponentSubheader heading={'Book an Appointment'}/>
        <BookingMain doctors={localizedDoctors} address={genDetails.address}/>
        
    </div>
  )
}

export default Booking
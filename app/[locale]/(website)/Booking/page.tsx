import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import BookingMain from '@/components/Booking/BookingMain'
import { getLocale } from 'next-intl/server';
import { getLocalizedPrefix } from '@/utils/getLocalizedPrefix';
import { getDoctors } from '@/lib/payloadFetches';
import { getGenDetails } from '@/lib/payloadFetches';


const Booking = async() => {

	const locale = await getLocale() as 'en' | 'ar' | 'all';

	
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
        <BookingMain doctors={localizedDoctors} address={genDetails.address ?? ''}/>
        
    </div>
  )
}

export default Booking
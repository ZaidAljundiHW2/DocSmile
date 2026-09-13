import Image from "next/image";
import React from 'react'
import Hero from '@/components/Home/Hero'
import UrgentCTA from '@/components/Home/UrgentCTA'
import Services from '@/components/Misc/ServicesPrev'
import Doctors from '@/components/Misc/Doctors'
import Trust from '@/components/Home/Trust'
import Journey from '@/components/Home/Journey'
import PatientInfo from '@/components/Home/PatientInfo'
import Location from '@/components/Misc/Location'
import Contact from '@/components/Misc/ContactOptions'
import { getTranslations, getLocale } from "next-intl/server";
import { getLocalizedPrefix } from '@/utils/getLocalizedPrefix'
import { Doctor } from '@/payload-types'
import { getDoctors, getServices, getGenDetails } from "@/lib/payloadFetches";


export default async function Home() {

	const locale = await getLocale() as 'en' | 'ar' | 'all';

	const [doctors, services, genDetails] = await Promise.all([
		getDoctors(locale),
		getServices(locale),
		getGenDetails(locale)
	]);

	const t = await getTranslations('home');

	const localizedDoctors = doctors?.map((doctor: Doctor) => ({
			...doctor,
		prefix: getLocalizedPrefix(doctor.prefix, locale),
	})) ?? [];

  


  return (
    <div>
        
        <Hero />

        <UrgentCTA footerHours={genDetails.footerHours}/>

        <Services services={services} header={t('servicesPreview.header')} showMore={true}/>

        <Doctors doctors={localizedDoctors} header={t('doctors.header')}/>

        <Trust />

        <Journey />

        <PatientInfo />

        <Location genDetails={genDetails}/>

        <Contact />

    </div>
  );
}
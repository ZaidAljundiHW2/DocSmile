import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ContactMain from '@/components/Contact/ContactMain'
import { getLocale, getTranslations } from 'next-intl/server';
import { getLocalizedPrefix } from '@/utils/getLocalizedPrefix';
import { getDoctors } from '@/lib/payloadFetches';

const Contact = async() => {

	const locale = await getLocale() as 'en' | 'ar' | 'all';
  const t = await getTranslations('contact');

  const doctors = await getDoctors(locale);

  const localizedDoctors = doctors?.map((doctor: any) => ({
		...doctor,
		prefix: getLocalizedPrefix(doctor.prefix, locale),
	})) ?? [];

  return (
    <div>

        <ComponentSubheader heading={t('header')}/>

        <ContactMain doctors={localizedDoctors}/>
        
    </div>
  )
}

export default Contact
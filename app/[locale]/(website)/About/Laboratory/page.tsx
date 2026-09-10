import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import OurLaboratory from '@/components/About/OurLaboratory'
import { getLocale } from 'next-intl/server';
import { getAboutUs } from '@/lib/payloadFetches';


const Laboratory = async() => {


  const locale = await getLocale() as 'en' | 'ar' | 'all';
  const lab = await getAboutUs(locale);

  return (
    <div>

      <ComponentSubheader heading={'Our Laboratory'}/>

      <OurLaboratory text={lab.laboratory ?? ''}/>


        
    </div>
  )
}

export default Laboratory
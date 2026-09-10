import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import OurLaboratory from '@/components/About/OurLaboratory'
import { getLocale } from 'next-intl/server';

async function getLab(locale : string) {

  try {

    const res = await fetch(`/api/globals/about/lab?locale=${locale}`);

    if (!res.ok) {
      throw new Error('could not fetch lab page');
    }

    const jsonData = await res.json();

    return jsonData.text;
    
    
  } catch (error) {
    console.error(error);
  }


}

const Laboratory = async() => {


  const locale = await getLocale();
  const lab = await getLab(locale);

  return (
    <div>

      <ComponentSubheader heading={'Our Laboratory'}/>

      <OurLaboratory text={lab}/>


        
    </div>
  )
}

export default Laboratory
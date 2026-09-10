import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getLocale, getTranslations } from 'next-intl/server';

async function getTOS(locale : string) {

    try {

        const req = await fetch(`/api/globals/legal/tos?locale=${locale}`);
        const jsonData = await req.json();

        return jsonData;
        
    } catch (error) {
        console.error(error);
    }

}

const TOS = async() => {

    const locale = await getLocale();
    
    const tos = await getTOS(locale);

    const t = await getTranslations('legal.tos');

  return (
    <div>

        <LegalPage heading={t('header')} legalObj={tos.tos}/>
      
    </div>
  )
}

export default TOS

import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';

async function getPP(locale : string) {

    try {

        const req = await fetch(`${process.env.API_URL}/api/globals/legal/pp?locale=${locale}`);
        const jsonData = await req.json();

        return jsonData;
        
    } catch (error) {
        console.error(error);
    }

}

const PrivacyPolicy = async() => {

    const locale = await getLocale();
    
    const pp = await getPP(locale);

    const t = await getTranslations('legal.pp');




return (
    <div>

        <LegalPage heading={t('header')} text={pp.pp}/>
    
    </div>
  )
}

export default PrivacyPolicy

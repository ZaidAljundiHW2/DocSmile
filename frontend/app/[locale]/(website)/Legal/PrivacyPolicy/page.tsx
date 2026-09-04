import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getTranslations } from 'next-intl/server';

async function getPP() {

    try {

        const req = await fetch(`${process.env.API_URL}/api/globals/legal/pp`);
        const jsonData = await req.json();

        return jsonData;
        
    } catch (error) {
        console.error(error);
    }

}

const PrivacyPolicy = async() => {
    
    const pp = await getPP();

    const t = await getTranslations('legal.pp');




return (
    <div>

        <LegalPage heading={t('header')} text={pp.pp}/>
    
    </div>
  )
}

export default PrivacyPolicy

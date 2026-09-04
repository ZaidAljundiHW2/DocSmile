import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getTranslations } from 'next-intl/server';

async function getTOS() {

    try {

        const req = await fetch(`${process.env.API_URL}/api/globals/legal/tos`);
        const jsonData = await req.json();

        return jsonData;
        
    } catch (error) {
        console.error(error);
    }

}

const TOS = async() => {
    
    const tos = await getTOS();

    const t = await getTranslations('legal.tos');

  return (
    <div>

        <LegalPage heading={t('header')} text={tos.tos}/>
      
    </div>
  )
}

export default TOS

import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getLocale, getTranslations } from 'next-intl/server';
import { getLegal } from '@/lib/payloadFetches';

const TOS = async() => {

    const locale = await getLocale() as 'en' | 'ar' | 'all';
    
    const tos = await getLegal(locale, 'tos');

    const t = await getTranslations('legal.tos');

  return (
    <div>

        <LegalPage heading={t('header')} legalObj={tos ?? []}/>
      
    </div>
  )
}

export default TOS

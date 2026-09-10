import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import { getLegal } from '@/lib/payloadFetches';


const PrivacyPolicy = async() => {

    const locale = await getLocale() as 'en' | 'ar' | 'all';
    
    const pp = await getLegal(locale, 'privacyPolicy');

    const t = await getTranslations('legal.pp');




return (
    <div>

        <LegalPage heading={t('header')} legalObj={pp ?? []}/>
    
    </div>
  )
}

export default PrivacyPolicy

import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getLocale, getTranslations } from 'next-intl/server';
import { getLegal } from '@/lib/payloadFetches';


const CookiePolicy = async() => {
	
	const locale = await getLocale() as 'en' | 'ar' | 'all';
	const t = await getTranslations('legal.cookie');
	const cookies = await getLegal(locale, 'cookiePolicy');



	return (
		<div>

			<LegalPage heading={t('header')} legalObj={cookies ?? []}/>
		
		</div>
	)
}

export default CookiePolicy

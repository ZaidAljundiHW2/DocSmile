import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getLocale, getTranslations } from 'next-intl/server';

async function getCookiesPolicy(locale : string) {

	try {

		const req = await fetch(`${process.env.API_URL}/api/globals/legal/cookies?locale=${locale}`);
		const jsonData = await req.json();

		return jsonData;
		
	} catch (error) {
		console.error(error);
	}

}

const CookiePolicy = async() => {
	
	const locale = await getLocale()
	const t = await getTranslations('legal.cookie')
	const cookies = await getCookiesPolicy(locale);



	return (
		<div>

			<LegalPage heading={t('header')} text={cookies.cookies}/>
		
		</div>
	)
}

export default CookiePolicy

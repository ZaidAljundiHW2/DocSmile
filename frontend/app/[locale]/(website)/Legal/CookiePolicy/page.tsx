import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { getTranslations } from 'next-intl/server';

async function getCookiesPolicy() {

	try {

		const req = await fetch(`${process.env.API_URL}/api/globals/legal/cookies`);
		const jsonData = await req.json();

		return jsonData;
		
	} catch (error) {
		console.error(error);
	}

}

const CookiePolicy = async() => {
	
	const t = await getTranslations('legal.cookie')
	const cookies = await getCookiesPolicy();



	return (
		<div>

			<LegalPage heading={t('header')} text={cookies.cookies}/>
		
		</div>
	)
}

export default CookiePolicy

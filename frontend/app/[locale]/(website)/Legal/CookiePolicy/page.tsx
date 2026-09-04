import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'


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
	

	const cookies = await getCookiesPolicy();



	return (
		<div>

			<LegalPage heading={'Our Cookie Policy'} text={cookies.cookies}/>
		
		</div>
	)
}

export default CookiePolicy

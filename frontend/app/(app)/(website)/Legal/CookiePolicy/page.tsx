"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import LegalPage from '@/components/Legal/LegalPage'

const CookiePolicy = () => {
	const [cookies, setCookies] = useState();
	const [loading, setLoading] = useState(true);

	const getCookiesPolicy = async() => {
		try {

			const req = await fetch('/api/globals/legal/cookies');
			const jsonData = await req.json();

			setCookies(jsonData);
			
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {

		const load = async() => {
			await getCookiesPolicy();
			setLoading(false);
		}

		load();

	},[]);

	if (loading) return <p style={{color:'black'}}>Loading...</p>




	return (
		<div>

			<LegalPage heading={'Our Cookie Policy'} text={cookies.cookies}/>
		
		</div>
	)
}

export default CookiePolicy

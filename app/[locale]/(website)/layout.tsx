import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { getLocale } from "next-intl/server";

async function getSocials () {

	try {

		try {
			
			const req = await fetch('/api/globals/social');

			if (!req.ok) {
				throw new Error("Unable to fetch socials");
			}

			const jsonData = await req.json();
			
			return jsonData;

		} catch (error) {
			console.error(error);
		}
		
	} catch (error) {
		console.error(error);
	}
}

async function getGenDetails (locale : string) {

	try {
			
		const req = await fetch(`/api/globals/clinic-general-information?locale=${locale}`);

		if (!req.ok) {
			throw new Error("Unable to fetch socials");
		}

		const jsonData = await req.json();
		
		return jsonData;


	} catch (error) {
		console.error(error);
	}


}


export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	const locale = await getLocale();
	

	const [socials, genDetails] = await Promise.all([
		getSocials(),
		getGenDetails(locale)
	]);


	return (
		<>
			<Navbar />
				{children}
			<Footer 
				socials={socials}
				genDetails={genDetails}
			/>
		</>
	);
}
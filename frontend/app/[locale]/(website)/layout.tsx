import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useState, useEffect } from "react";


async function getSocials () {

	try {

		try {
			
			const req = await fetch(`${process.env.API_URL}/api/globals/social`);

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

async function getGenDetails () {

	try {
			
		const req = await fetch(`${process.env.API_URL}/api/globals/clinic-general-information`);

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

	

	const [socials, genDetails] = await Promise.all([
		getSocials(),
		getGenDetails()
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
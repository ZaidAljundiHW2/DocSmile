"use client"
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useState, useEffect } from "react";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	const [socials, setSocials] = useState();
	const [genDetails, setGenDetails] = useState();

	const [loading, setLoading] = useState(true);


	const getSocials = async() => {
	  
		try {
			
			const req = await fetch('/api/globals/social');

			if (!req.ok) {
				throw new Error("Unable to fetch socials");
			}

			const jsonData = await req.json();
			setSocials(jsonData);

		} catch (error) {
			console.error(error);
		}
	}

	const getGenDetails = async() => {
		try {
			
			const req = await fetch('/api/globals/clinic-general-information');

			if (!req.ok) {
				throw new Error("Unable to fetch socials");
			}

			const jsonData = await req.json();
			console.log(jsonData);
			setGenDetails(jsonData);


		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {

		const load = async() => {
			await getSocials();
			await getGenDetails();
			
			setLoading(false);


		}

		load();

	},[]);

	if (loading) return <p style={{color:'black'}}>Loading...</p>


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
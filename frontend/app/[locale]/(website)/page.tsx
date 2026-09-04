import Image from "next/image";
import React from 'react'
import Hero from '@/components/Home/Hero'
import UrgentCTA from '@/components/Home/UrgentCTA'
import Services from '@/components/Misc/ServicesPrev'
import Doctors from '@/components/Misc/Doctors'
import Trust from '@/components/Home/Trust'
import Journey from '@/components/Home/Journey'
import PatientInfo from '@/components/Home/PatientInfo'
import Location from '@/components/Home/Location'
import Contact from '@/components/Misc/ContactOptions'


async function getDoctors() {

	try {

		const req = await fetch(`${process.env.API_URL}/api/doctors`);

		if (!req.ok) {

			throw new Error('Could not fetch doctors');

		}

		const jsonData = await req.json();
		
		return jsonData.docs;
	


	
	} catch (error) {
		console.error(error);
	}


}


async function getServices() {

	try {

		const req = await fetch(`${process.env.API_URL}/api/services`);

		if (!req.ok) {

			throw new Error("Could not fetch services");
		}

		const jsonData = await req.json();
		
		return jsonData.docs;

	
	} catch (error) {
		console.error(error);
	}

}

async function getGenDetails() {

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


export default async function Home() {
  
	

	const [doctors, services, genDetails] = await Promise.all([
		getDoctors(),
		getServices(),
		getGenDetails()
	])


  return (
    <div>
        
        <Hero />

        <UrgentCTA footerHours={genDetails.footerHours}/>

        <Services services={services} header={"Our Services"} showMore={true}/>

        <Doctors doctors={doctors} header={'Our Doctors'}/>

        <Trust />

        <Journey />

        <PatientInfo />

        <Location genDetails={genDetails}/>

        <Contact />

    </div>
  );
}

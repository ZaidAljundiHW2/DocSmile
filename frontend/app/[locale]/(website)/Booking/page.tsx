import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import BookingMain from '@/components/Booking/BookingMain'

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

const Booking = async() => {

	
  const [doctors, genDetails] = await Promise.all([
    getDoctors(),
    getGenDetails(),
  ]);

  return (
    <div>
        <ComponentSubheader heading={'Book an Appointment'}/>
        <BookingMain doctors={doctors} address={genDetails.address}/>
        
    </div>
  )
}

export default Booking
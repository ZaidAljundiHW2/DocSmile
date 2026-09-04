import React from 'react'
import DoctorGrid from '@/components/Doctors/DoctorGrid'
import DoctorHero from '@/components/Doctors/DoctorHero'


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

const Doctors = async() => {

	
	const doctors = await getDoctors();

  return (
    <div>
        <DoctorHero /> 

        <DoctorGrid doctors={doctors}/>


        
    </div>
  )
}

export default Doctors
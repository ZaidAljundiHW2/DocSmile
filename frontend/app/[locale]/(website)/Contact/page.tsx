import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ContactMain from '@/components/Contact/ContactMain'

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

const Contact = async() => {

  const doctors = await getDoctors();

  return (
    <div>

        <ComponentSubheader heading={'Contact Us'}/>

        <ContactMain doctors={doctors}/>
        
    </div>
  )
}

export default Contact
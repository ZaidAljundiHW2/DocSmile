"use client"
import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import BookingMain from '@/components/Booking/BookingMain'
import { useState, useEffect } from 'react'

const Booking = () => {

	const [doctors, setDoctors] = useState([]);
  const [genDetails, setGenDetails] = useState();
	const [loading, setLoading] = useState(true);

  const getGenDetails = async() => {
		try {
			
			const req = await fetch('/api/globals/clinic-general-information');

			if (!req.ok) {
				throw new Error("Unable to fetch socials");
			}

			const jsonData = await req.json();
			setGenDetails(jsonData);


		} catch (error) {
			console.error(error);
		}
	}

  const getDoctors = async() => {

    try {
		
		const res = await fetch('/api/doctors');

		if (!res.ok) {
			throw new Error('could not fetch doctors');
		}

		const jsonData = await res.json();
		setDoctors(jsonData.docs);


          
    } catch (error) {
      	console.error(error);
    }
  }

  useEffect(() => {

    const load = async() => {

      await getDoctors();
      await getGenDetails();
      setLoading(false);
    }

    load();

  },[])


  if (loading) return <p>Loading...</p>

  return (
    <div>
        <ComponentSubheader heading={'Book an Appointment'}/>
        <BookingMain doctors={doctors} address={genDetails.address}/>
        
    </div>
  )
}

export default Booking
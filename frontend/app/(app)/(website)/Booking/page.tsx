"use client"
import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import BookingMain from '@/components/Booking/BookingMain'
import { useState, useEffect } from 'react'

const Booking = () => {

	const [doctors, setDoctors] = useState([]);
	const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }

    load();

  },[])


  if (loading) return <p>Loading...</p>

  return (
    <div>
        <ComponentSubheader heading={'Book an Appointment'}/>
        <BookingMain doctors={doctors}/>
        
    </div>
  )
}

export default Booking
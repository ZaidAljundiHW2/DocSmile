"use client"
import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import DoctorGrid from '@/components/Doctors/DoctorGrid'
import DoctorHero from '@/components/Doctors/DoctorHero'
import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'

const Doctors = () => {

	const [doctors, setDoctors] = useState([]);
	const [loading, setLoading] = useState(true);

	const getDoctors = async() => {

		try {

			const res = await fetch('/api/doctors');

			if (!res.ok) {

				throw new Error('Could not fetch doctors');

			}

			const jsonData = await res.json();
			console.log(jsonData.docs);
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

	},[]);

	if (loading) return <p style={{color:'black'}}>loading...</p>

  return (
    <div>
        <DoctorHero /> 

        <DoctorGrid doctors={doctors}/>


        
    </div>
  )
}

export default Doctors
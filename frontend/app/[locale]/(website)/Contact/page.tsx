"use client"
import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ContactMain from '@/components/Contact/ContactMain'
import { useState, useEffect } from 'react'

const Contact = () => {

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

        <ComponentSubheader heading={'Contact Us'}/>

        <ContactMain doctors={doctors}/>
        
    </div>
  )
}

export default Contact
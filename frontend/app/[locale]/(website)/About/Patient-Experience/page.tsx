"use client"
import React, { useState, useEffect } from 'react'
import PatientExperienceGrid from '@/components/About/PatientExperienceGrid'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'

const PatientExperience = () => {

  const [testimonials, setTestimonials] = useState();
  const [loading, setLoading] = useState(true);

  const getTestimonials = async() => {

    try {

      const res = await fetch('/api/testimonials');

      if (!res.ok) {
        throw new Error('could not fetch testimonials');


      }
      
      const jsonData = await res.json();
      setTestimonials(jsonData.docs);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    const load = async() => {

      await getTestimonials();
      setLoading(false);
    }

    load();

  },[]);

  if (loading) return <p>Loading...</p>

  

  return (
    <div>

      <ComponentSubheader heading={'Patient Experiences'}/>

      <PatientExperienceGrid testimonialsObj={testimonials} />
        
    </div>
  )
}

export default PatientExperience
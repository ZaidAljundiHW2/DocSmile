"use client"
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
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import ServicesJSON from '@/assets/JSONs/services.json'
import { useState, useEffect } from "react";

export default function Home() {
  
  const homeServices = ServicesJSON.slice(0,6);

  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
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

  const getServices = async() => {

    try {

      const res = await fetch('/api/services');

      if (!res.ok) {

        throw new Error("Could not fetch services");
      }

      const jsonData = await res.json();
      setServices(jsonData.docs);

      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    const load = async() => {

      await getDoctors();
      await getServices();
      setLoading(false);


    }

    load();

  },[]);

  if (loading) return <p style={{color:'black'}}>loading...</p>

  return (
    <div>
        
        <Hero />

        <UrgentCTA />

        <Services services={services} header={"Our Services"} showMore={true}/>

        <Doctors doctors={doctors} header={'Our Doctors'}/>

        <Trust />

        <Journey />

        <PatientInfo />

        <Location />

        <Contact />

    </div>
  );
}

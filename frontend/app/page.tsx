import Image from "next/image";
import React from 'react'
import Hero from '../components/Home/Hero'
import UrgentCTA from '../components/Home/UrgentCTA'
import Services from '../components/Misc/ServicesPrev'
import Doctors from '../components/Misc/Doctors'
import Trust from '../components/Home/Trust'
import Journey from '../components/Home/Journey'
import PatientInfo from '../components/Home/PatientInfo'
import Location from '../components/Home/Location'
import Contact from '../components/Misc/ContactOptions'
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import ServicesJSON from '@/assets/JSONs/services.json'

export default function Home() {
  
  const homeServices = ServicesJSON.slice(0,6);

  return (
    <div>
        
        <Hero />

        <UrgentCTA />

        <Services homeServices={homeServices} header={"Our Services"} showMore={true}/>

        <Doctors doctors={DoctorsJSON} header={'Our Doctors'}/>

        <Trust />

        <Journey />

        <PatientInfo />

        <Location />

        <Contact />

    </div>
  );
}

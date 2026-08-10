import Image from "next/image";
import React from 'react'
import Hero from '../components/Home/Hero'
import UrgentCTA from '../components/Home/UrgentCTA'
import Services from '../components/Home/Services'
import Doctors from '../components/Misc/Doctors'
import Trust from '../components/Home/Trust'
import Journey from '../components/Home/Journey'
import PatientInfo from '../components/Home/PatientInfo'
import Location from '../components/Home/Location'
import Contact from '../components/Home/Contact'
import DoctorsJSON from '@/assets/JSONs/doctors.json'

export default function Home() {
  return (
    <div>
        
        <Hero />

        <UrgentCTA />

        <Services />

        <Doctors doctors={DoctorsJSON} header={'Our Doctors'}/>

        <Trust />

        <Journey />

        <PatientInfo />

        <Location />

        <Contact />

    </div>
  );
}

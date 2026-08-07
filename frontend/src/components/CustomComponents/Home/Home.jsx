import React from 'react'
import Hero from './HomeComponents/Hero'
import UrgentCTA from './HomeComponents/UrgentCTA'
import Services from './HomeComponents/Services'
import Doctors from './HomeComponents/Doctors'
import Trust from './HomeComponents/Trust'
import Journey from './HomeComponents/Journey'
import PatientInfo from './HomeComponents/PatientInfo'
import Location from './HomeComponents/Location'
import Contact from './HomeComponents/Contact'

const Home = () => {
  return (
    <div>
        
        <Hero />

        <UrgentCTA />

        <Services />

        <Doctors />

        <Trust />

        <Journey />

        <PatientInfo />

        <Location />

        <Contact />

    </div>
  )
}

export default Home
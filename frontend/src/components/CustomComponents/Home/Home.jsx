import React from 'react'
import Hero from './HomeComponents/Hero'
import UrgentCTA from './HomeComponents/UrgentCTA'
import Services from './HomeComponents/Services'
import Doctors from './HomeComponents/Doctors'

const Home = () => {
  return (
    <div>
        
        <Hero />

        <UrgentCTA />

        <Services />

        <Doctors />

    </div>
  )
}

export default Home
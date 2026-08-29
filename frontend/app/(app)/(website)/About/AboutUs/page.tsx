"use client"
import React, { useEffect, useState } from 'react'
import AboutHero from '@/components/About/AboutHero'
import OurMission from '@/components/About/OurMission'
import OurCenter from '@/components/About/OurCenter'


const AboutUs = () => {


  const [aboutUsBlock, setAboutUsBlock] = useState();
  const [numDocs, setNumDocs] = useState();
  const [numSer, setNumSer] = useState();
  const [loading, setLoading] = useState(true);

  const getNumDocs = async() => {
    try {
      
      const req = await fetch('/api/doctors/numDoctors');

      if (!req.ok) {
        throw new Error('could not fetch number of doctors');
      }

      const jsonData = await req.json();

      setNumDocs(jsonData);

      


    } catch (error) {
      console.error(error);
    }
  }

  const getNumSers = async() => {
    try {
      
      const req = await fetch('/api/services/numServices');

      if (!req.ok) {
        throw new Error('could not fetch number of services');
      }

      const jsonData = await req.json();

      setNumSer(jsonData);

      


    } catch (error) {
      console.error(error);
    }
  }

  const getAboutUs = async() => {

    try {
      
      const req = await fetch('/api/globals/about/AboutUs');

      if (!req.ok) {
        throw new Error('Could not fetch about us information');

      }

      const jsonData = await req.json();
      setAboutUsBlock(jsonData);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    const load = async() => {

      await getAboutUs();
      await getNumDocs();
      await getNumSers();
      setLoading(false);
    }

    load();

  },[]);

  if (loading) return <p style={{color:'black'}}>Loading...</p>

  return (
    <div>
      <AboutHero />

      <OurMission mission={aboutUsBlock.mission} />

      <OurCenter 
        doctors={numDocs}
        ser={numSer}
        visitors={aboutUsBlock.visitors}
        exp={aboutUsBlock.exp}
        center={aboutUsBlock.center}
      />
        
    </div>
  )
}

export default AboutUs
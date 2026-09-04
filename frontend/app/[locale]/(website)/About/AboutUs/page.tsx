import React from 'react'
import AboutHero from '@/components/About/AboutHero'
import OurMission from '@/components/About/OurMission'
import OurCenter from '@/components/About/OurCenter'


async function getNumDocs() {

  try {
      
    const req = await fetch(`${process.env.API_URL}/api/doctors/numDoctors`);

    if (!req.ok) {
      throw new Error('could not fetch number of doctors');
    }

    const jsonData = await req.json();

    return jsonData;
    } catch (error) {
      console.error(error);
    }

}

const getNumSers = async() => {
  try {
    
    const req = await fetch(`${process.env.API_URL}/api/services/numServices`);

    if (!req.ok) {
      throw new Error('could not fetch number of services');
    }

    const jsonData = await req.json();

    return jsonData;

    


  } catch (error) {
    console.error(error);
  }
}

const getAboutUs = async() => {

    try {
      
      const req = await fetch(`${process.env.API_URL}/api/globals/about/AboutUs`);

      if (!req.ok) {
        throw new Error('Could not fetch about us information');

      }

      const jsonData = await req.json();
      return jsonData;

    } catch (error) {
      console.error(error);
    }
  }

const AboutUs = async() => {



  const [aboutUsBlock, numDocs, numSer] = await Promise.all([
    getAboutUs(),
    getNumDocs(),
    getNumSers()
  ]);

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
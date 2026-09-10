import React from 'react'
import AboutHero from '@/components/About/AboutHero'
import OurMission from '@/components/About/OurMission'
import OurCenter from '@/components/About/OurCenter'
import { getLocale } from 'next-intl/server'
import { getNumDocs, getNumSers, getAboutUs } from '@/lib/payloadFetches'

const AboutUs = async() => {

  const locale = await getLocale() as 'en' | 'ar' | 'all';


  const [aboutUsBlock, numDocs, numSer] = await Promise.all([
    getAboutUs(locale),
    getNumDocs(),
    getNumSers()
  ]);

  

  return (
    <div>
      <AboutHero />

      <OurMission mission={aboutUsBlock.missionStatement ?? ''} />

      <OurCenter 
        doctors={numDocs}
        ser={numSer}
        visitors={aboutUsBlock.visitors ?? ''}
        exp={aboutUsBlock.expYears ?? ''}
        showCenter={true}
        center={aboutUsBlock.ourCenter ?? ''}
    />
        
    </div>
  )
}

export default AboutUs
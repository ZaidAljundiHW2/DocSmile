import React from 'react'
import CampaignHero from './CampaignHero'
import CampaignOffer from './CampaignOffer'
import WhyUs from './WhyUs'
import ServicesPrev from '../Misc/ServicesPrev'
import TestimonialCarousel from '../Misc/TestimonialCarousel'
import CampainFAQs from './CampaignFAQs'
import Location from '../Misc/Location'
import ContactOptions from '../Misc/ContactOptions'
import { Campaign, ClinicGeneralInformation } from '@/payload-types'

const CampaignPageTemplate = ({ 
  campaign,
  numDocs,
  numSer,
  visitors,
  exp,
  mission,
  genDetails
} : { 
  campaign : Campaign,
  numDocs : number,
  numSer : number,
  visitors : string,
  exp : string,
  mission : string,
  genDetails : ClinicGeneralInformation

}) => {
  return (
    <div>

      <CampaignHero campaign={campaign}/>

      <CampaignOffer campaign={campaign}/>

      <WhyUs 
        mission={mission}
        numDocs={numDocs}
        numSer={numSer}
        visitors={visitors}
        exp={exp}
      />

      <ServicesPrev services={campaign.content?.coveredServices} header={'Covered Services'} showMore={false}/>

      <TestimonialCarousel />

      <CampainFAQs FAQObj={campaign.content?.FAQs} />

      <Location genDetails={genDetails} />

      <ContactOptions />




        
      
    </div>
  )
}

export default CampaignPageTemplate

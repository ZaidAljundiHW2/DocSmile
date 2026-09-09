import React from 'react'
import CampaignHero from './CampaignHero'
import CampaignOffer from './CampaignOffer'
import WhyUs from './WhyUs'
import ServicesPrev from '../Misc/ServicesPrev'
import CampainFAQs from './CampaignFAQs'
import Location from '../Misc/Location'
import ContactOptions from '../Misc/ContactOptions'
import { Campaign, ClinicGeneralInformation, Service } from '@/payload-types'

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

      <ServicesPrev 
        services={(campaign.content?.coveredServices ?? []).filter(
          (service): service is Service => typeof service !== 'number'
        )}
        header={'Covered Services'} 
        showMore={false}
      />

      <CampainFAQs
        FAQObj={(campaign.content?.FAQs ?? []).map(faq => ({
          id: faq.id ?? '',
          question: faq.question ?? '',
          answer: faq.answer ?? ''
        }))}
      />

      <Location genDetails={genDetails} />

      <ContactOptions />

    </div>
  )
}

export default CampaignPageTemplate
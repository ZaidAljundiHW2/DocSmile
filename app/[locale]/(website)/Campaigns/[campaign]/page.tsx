import React from 'react'
import CampaignPageTemplate from '@/components/Campaign/CampaignPageTemplate'
import { getLocale } from 'next-intl/server';
import { getPayload } from 'payload'
import config from '@payload-config'
import { getNumDocs, getNumSers, getAboutUs, getGenDetails } from '@/lib/payloadFetches';


const Campaign = async({
  params
} : {
  params : Promise<{ campaign : string }>
}) => {


  const campaignSlug = decodeURIComponent((await params).campaign);

  const locale = await getLocale() as 'en' | 'ar' | 'all';

  const payload = await getPayload({ config });

  const result = await payload.find({

    collection:'campaigns',

    where: {

      slug: {

        equals: campaignSlug
      }
    },

    limit:1,
    depth:2,
    locale,

    
  });

  const campaign = result.docs[0];

  const [aboutUsBlock, genDetails, numDocs, numSer] = await Promise.all([
    getAboutUs(locale),
    getGenDetails(locale),
    getNumDocs(),
    getNumSers()
  ]);
  





  return (
    <div>

      <CampaignPageTemplate 
        campaign={campaign} 
        numDocs={numDocs}
        numSer={numSer}
        visitors={aboutUsBlock.visitors ?? ''}
        exp={aboutUsBlock.expYears ?? ''}
        mission={aboutUsBlock.missionStatement ?? ''}
        genDetails={genDetails}
      />
      
    </div>
  )
}

export default Campaign

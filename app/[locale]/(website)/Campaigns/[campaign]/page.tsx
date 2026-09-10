import React from 'react'
import CampaignPageTemplate from '@/components/Campaign/CampaignPageTemplate'
import { getLocale } from 'next-intl/server';
import { getPayload } from 'payload'
import config from '@payload-config'


async function getNumDocs() {

  try {
      
    const req = await fetch('/api/doctors/numDoctors');

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
    
    const req = await fetch('/api/services/numServices');

    if (!req.ok) {
      throw new Error('could not fetch number of services');
    }

    const jsonData = await req.json();

    return jsonData;

    


  } catch (error) {
    console.error(error);
  }
}

const getAboutUs = async(locale : string) => {

    try {
      
      const req = await fetch(`/api/globals/about/AboutUs?locale=${locale}`);

      if (!req.ok) {
        throw new Error('Could not fetch about us information');

      }

      const jsonData = await req.json();
      return jsonData;

    } catch (error) {
      console.error(error);
    }
  }




async function getGenDetails(locale: string) {

	try {
			
		const req = await fetch(`/api/globals/clinic-general-information?locale=${locale}`);

		if (!req.ok) {
			throw new Error("Unable to fetch socials");
		}

		const jsonData = await req.json();
		
		return jsonData;


	} catch (error) {
		console.error(error);
	}


}


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
        visitors={aboutUsBlock.visitors}
        exp={aboutUsBlock.exp}
        mission={aboutUsBlock.mission}
        genDetails={genDetails}
      />
      
    </div>
  )
}

export default Campaign

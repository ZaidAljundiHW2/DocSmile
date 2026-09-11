import React from 'react'
import OurMission from '../About/OurMission'
import OurCenter from '../About/OurCenter'
import { getTranslations } from 'next-intl/server'

const WhyUs = async({

    mission,
    numDocs,
    numSer,
    visitors,
    exp

} : {

    mission : string,
    numDocs : number,
    numSer : number,
    visitors : string,
    exp : string

}) => {
    
    const t = await getTranslations('campaign.WhyUs')
  return (
    <div className="flex flex-col py-5">

        <div className="flex flex-col items-center text-center gap-2">
            <h2
                className="main_header"
            >
                {t('header')}
            </h2>

            <p className="secondary_text max-w-xl">
                {t('subheader')}
            </p>
        </div>

        <OurMission 
            mission={mission} 
        />

        <OurCenter 
            doctors={numDocs}
            ser={numSer}
            visitors={visitors}
            exp={exp}
            showCenter={false}
            center={''}
        />
      
    </div>
  )
}

export default WhyUs
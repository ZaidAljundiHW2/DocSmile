import React from 'react'
import { getTranslations } from 'next-intl/server'

const ServiceMiscInfo = async({ doctor, date } : {doctor: string, date: string}) => {

    const t = await getTranslations('services.serviceTemplate.miscInfo');

  return (
    <div
        className='
            servicecontainer
            p-10
            flex-col
            gap-2
        '
        style={{
            color:'#808080'
        }}
    >
        {/* Explanation that clinical assessment is required. */}
        <p
            style={{
                color:'#808080'
            }}
        >
            {t('clinicalAssessmentExplanation')}
        </p>
        
        {/* Medical-information disclaimer. */}
        <h2
            className='
                secondary_header
            '
        >
            {t('medicalDisclaimer')}
        </h2>

        {/* Reviewer and review date */}
        <p
            style={{
                color:'#808080'
            }}
        >
            {t('reviewer')}: {doctor}, {t('lrd')}: {date}
        </p>
        
    </div>
  )
}

export default ServiceMiscInfo
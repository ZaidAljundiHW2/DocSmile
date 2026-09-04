import React from 'react'
import { getTranslations } from 'next-intl/server'

const DoctorMiscInfo = async({ doctor, date } : {doctor: string, date: string}) => {

    const t = await getTranslations('doctors.doctorTemplate.doctorMiscInfo');

  return (
    <div
        className='
            servicecontainer
            p-10
            flex-col
            gap-2
            bg-white
        '
        style={{
            color:'#808080'
        }}
    >

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

export default DoctorMiscInfo
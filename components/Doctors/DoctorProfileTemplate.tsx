import React from 'react'
import './DoctorProfile.css'
import DoctorHeader from './DoctorHeader'
import DoctorInfo from './DoctorInfo'
import ServicesPrev from '../Misc/ServicesPrev'
import DoctorBook from './DoctorBook'
import DoctorMiscInfo from './DoctorMiscInfo'
import { Doctor } from '@/payload-types'
import { getTranslations } from 'next-intl/server'
import { Service } from '@/payload-types'

const DoctorProfileTemplate = async({ doctor } : { doctor : Doctor}) => {

  const t = await getTranslations('doctors.doctorTemplate.servicesPreview')

  return (
    <div>

        <DoctorHeader
            name={doctor.fullName ?? ''}
            title={doctor.title ?? ''}
            img={
                typeof doctor.photo === 'object' && doctor.photo
                    ? doctor.photo.url ?? ''
                    : ''
            }
        />

        <DoctorInfo doctor={doctor}/>

        <ServicesPrev
            services={(doctor.services ?? []).filter(
                (service): service is Service => typeof service !== 'number'
            )}
            header={t('header')}
            showMore={false}
        />
        
        <DoctorBook name={doctor.fullName ?? ''}/>

        <DoctorMiscInfo
            doctor={
                typeof doctor.profileReviewer === 'object' && doctor.profileReviewer
                    ? doctor.profileReviewer.fullName ?? ''
                    : ''
            }
            date={doctor.reviewDate ?? ''}
        />
        
    </div>
  )
}

export default DoctorProfileTemplate
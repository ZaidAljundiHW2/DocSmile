import React from 'react'
import './DoctorProfile.css'
import DoctorHeader from './DoctorHeader'
import DoctorInfo from './DoctorInfo'
import ServicesJSON from '@/assets/JSONs/services.json'
import ServicesPrev from '../Misc/ServicesPrev'
import DoctorBook from './DoctorBook'
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import DoctorMiscInfo from './DoctorMiscInfo'
import { Doctor } from '@/payload-types'

const DoctorProfileTemplate = ({ doctor } : { doctor : Doctor}) => {

  return (
    <div>

        <DoctorHeader name={doctor.fullName} title={doctor.title} img={doctor.photo.url}/>

        <DoctorInfo doctor={doctor}/>

        <ServicesPrev services={doctor.services} header={"Relevant Doctor's Services"} showMore={false}/>
        
        <DoctorBook name={doctor.fullName}/>

        <DoctorMiscInfo doctor={doctor.profileReviewer.fullName} date={doctor.reviewDate}/>
        
    </div>
  )
}

export default DoctorProfileTemplate
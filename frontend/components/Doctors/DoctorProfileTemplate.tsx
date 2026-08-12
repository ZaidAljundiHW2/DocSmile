import React from 'react'
import './DoctorProfile.css'
import DoctorHeader from './DoctorHeader'
import DoctorInfo from './DoctorInfo'
import ServicesJSON from '@/assets/JSONs/services.json'
import ServicesPrev from '../Misc/ServicesPrev'
import DoctorBook from './DoctorBook'
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import DoctorMiscInfo from './DoctorMiscInfo'

interface Doctor {
    doctorid: number,
    name:string,
    slug:string,
    img:string,
    title:string,
    specialty:string,
    languages:string[],
    services:number[],
    biography:string,
    education:string,
    qualifications:string[],
    profilereviewer:number,
    reviewdate:string,
    clinicalinterests:string[]

}

interface DoctorProfileTemplateProps {
    doctor: Doctor
}

const DoctorProfileTemplate = ({ doctor }: DoctorProfileTemplateProps) => {

    const doctorServices = ServicesJSON.filter(item => doctor.services.includes(item.serviceid));
    const reviewer = DoctorsJSON.find(
        item => item.doctorid === doctor.profilereviewer
    )?.name ?? '';

  return (
    <div>

        <DoctorHeader name={doctor.name} title={doctor.title} img={doctor.img}/>

        <DoctorInfo 
            specialty={doctor.specialty} 
            languages={doctor.languages} 
            biography={doctor.biography}
            education={doctor.education}
            qualifications={doctor.qualifications}
            interests={doctor.clinicalinterests}

        />

        <ServicesPrev homeServices={doctorServices} header={"Relevant Doctor's Services"} showMore={false}/>
        
        <DoctorBook name={doctor.name}/>

        <DoctorMiscInfo doctor={reviewer} date={doctor.reviewdate}/>
        
    </div>
  )
}

export default DoctorProfileTemplate
import React from 'react'
import PatientExperienceGrid from '@/components/About/PatientExperienceGrid'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'

const PatientExperience = () => {
  return (
    <div>

      <ComponentSubheader heading={'Patient Experiences'}/>

      <PatientExperienceGrid />
        
    </div>
  )
}

export default PatientExperience
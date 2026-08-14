import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import FirstVisit from '@/components/PatientInformation/FirstVisit'
import PatientFAQs from '@/components/PatientInformation/PatientFAQs'
import UrgentCTA from '@/components/Home/UrgentCTA'
import Location from '@/components/Home/Location'

const PatientInformation = () => {
  return (
    <div>
        <ComponentSubheader heading={'Patient Information'}/>

        <FirstVisit />

        <PatientFAQs />

        <UrgentCTA />

        <Location />
        
    </div>
  )
}

export default PatientInformation
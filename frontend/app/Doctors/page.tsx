import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import DoctorGrid from '@/components/Doctors/DoctorGrid'

const Doctors = () => {
  return (
    <div>
        <ComponentSubheader heading={"Doctors"}/>

        <DoctorGrid />


        
    </div>
  )
}

export default Doctors
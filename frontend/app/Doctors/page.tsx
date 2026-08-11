import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import DoctorGrid from '@/components/Doctors/DoctorGrid'

const page = () => {
  return (
    <div>
        <ComponentSubheader heading={"Doctors"}/>

        <DoctorGrid />


        
    </div>
  )
}

export default page
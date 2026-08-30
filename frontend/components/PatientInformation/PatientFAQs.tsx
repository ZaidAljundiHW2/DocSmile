import React from 'react'
import FAQComp from '../Misc/FAQComp'

const PatientFAQs = ({FAQs}) => {

    
    
  return (
    <div
		className='
			patientinformationcontainer
			p-10
			flex-col
			gap-5
			items-center
			justify-center
		'
	>
		<h1
			className='
				main_header
			'
			style={{
				color:'black'
			}}
		>
			Frequently Asked Questions by New Patients
		</h1>

		<div className='w-full h-full mt-10'>
			<FAQComp FAQObj={FAQs}/>
		</div>

        
    </div>
  )
}

export default PatientFAQs
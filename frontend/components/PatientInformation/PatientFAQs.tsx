import React from 'react'
import FAQComp from '../Misc/FAQComp'

const PatientFAQs = () => {

    const patientFAQs = [
		{
			"id": 1,
			"question": "How long does the dental implant process take from start to finish?",
			"answer": "The full process typically takes three to nine months, depending on whether bone grafting is needed and how long osseointegration takes to complete. Straightforward cases with sufficient bone can move faster, while cases requiring grafting take longer to heal before the crown is placed."
		},
		{
			"id": 2,
			"question": "Is getting a dental implant painful?",
			"answer": "The procedure itself is performed under local anesthesia, so you shouldn't feel pain during placement. Most patients report mild soreness or swelling for a few days afterward, which is manageable with over-the-counter pain relief."
		},
		{
			"id": 3,
			"question": "How long do dental implants last?",
			"answer": "With proper oral hygiene and regular checkups, dental implants can last a lifetime. The crown attached to the implant may need replacement after 10-15 years due to normal wear."
		},
		{
			"id": 4,
			"question": "Am I too old to get dental implants?",
			"answer": "There's no upper age limit for implants. What matters most is having healthy gums, adequate bone density, and good overall health to support healing, all of which we assess during your consultation."
		},
    ]
    
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
			<FAQComp FAQObj={patientFAQs}/>
		</div>

        
    </div>
  )
}

export default PatientFAQs
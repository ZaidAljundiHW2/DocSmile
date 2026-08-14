import React from 'react'
import { Flex, Box, Checkbox } from '@chakra-ui/react'
import { IoMdCheckboxOutline } from "react-icons/io";
import BookButton from '../Misc/BookButton';
import CallButton from '../Misc/CallButton';
import WhatsappButton from '../Misc/WhatsappButton';

interface ChecklistItem {
	header:string,
	subheader:string
}

interface ServiceQualificationsContent {

	section: string,
	header: string,
	paragraphs: string[],
	img: string[],
	checklist: ChecklistItem[],

}

interface ServiceQualificationsProp {
	ServiceQualificationsObj: ServiceQualificationsContent
}


const ServiceQualifications = ({ ServiceQualificationsObj } : ServiceQualificationsProp) => {
  return (
    <div
		className='
			p-10
			servicecontainer
		'
	>
		<Flex
			className='
				w-full
				h-full
				p-5
				
				
			'

			gap={{base:5, md:20}}
		>

			{/* images */}
			<Flex
				className='
					flex-1
					items-center
					relative
					justify-center
					order-2

				'
			>

				<Box 
				
					className='
						w-[80%]
						h-[80%]
						rounded-lg
						bg-[#809BCE]

					'
				/>

				<img 
					
					className='
						bottom-0
						left-0
						absolute-image
					'
					src={ServiceQualificationsObj.img[0]}
				/>

				<img 
					className='
						top-0
						right-0
						absolute-image
					'
					src={ServiceQualificationsObj.img[1]}
				/>

			</Flex>



			{/* content */}
			<Flex
				className='
					flex-1
					flex-col
					order-1

				'

				gap={{base:2, md:5}}
			>
				<h2 className='secondary_header'>
					{ServiceQualificationsObj.section}
				</h2>

				<h1 className='main_header' style={{color:'black'}}>
					{ServiceQualificationsObj.header}
				</h1>

				{ServiceQualificationsObj.checklist.map((item,i) => (

					<Flex 
						key={i}
						className='
							items-center
							w-full
							gap-5
							ml-10
						'
					>
						<IoMdCheckboxOutline size={32} color='black'/>
						
						<Flex className='flex-col'>
							<h3 className='text-black font-bold'>
								{item.header}
							</h3>

							<p>
								{item.subheader}
							</p>
						</Flex>


					</Flex>

				))}


				{ServiceQualificationsObj.paragraphs.map((paragraph,i) => (
					<p key={i}>
						{paragraph}
					</p>
				))}

				<Flex gap={{base:2, md:5}}>
					<BookButton />
					
					<CallButton />

					<WhatsappButton />
				</Flex>

			</Flex>

		</Flex>

        
    </div>
  )
}

export default ServiceQualifications
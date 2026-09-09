import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { IoMdCheckboxOutline } from "react-icons/io";
import BookButton from '../Misc/BookButton';
import CallButton from '../Misc/CallButton';
import WhatsappButton from '../Misc/WhatsappButton';
import { Service } from '@/payload-types'
import { getTranslations } from 'next-intl/server';

const ServiceQualifications = async({ service } : {service : Service}) => {

	const qualBlocks = service.content?.qualificationsParagraphs.split('\n');
	const t = await getTranslations('services.serviceTemplate.serviceQualifications');

  return (
    <div
		className='
			md:p-10
			p-5
			servicecontainer
			md:text-start
			text-center
		'
	>
		<Flex
			className='
				w-full
				h-full
				p-5
				lg:flex-row
				flex-col
			'

			gap={{base:5, md:20}}
		>

			{/* images */}
			<Flex
				className='
					md:flex-1
					
					aspect-square
					items-center
					relative
					justify-center
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
						w-[45%]
						h-auto
						rounded-xl
						absolute
					'
					src={service.content?.qualificationsImages[0].image.url}
					// alt={`${ServiceQualificationsObj.section} illustration 1`}
					loading='lazy'
				/>

				<img 
					className='
						top-0
						right-0
						w-[45%]
						h-auto
						rounded-xl
						absolute
					'
					src={service.content?.qualificationsImages[1].image.url}
					// alt={`${ServiceQualificationsObj.section} illustration 2`}
					loading='lazy'
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
					{t('header')}
				</h2>

				<h1 className='main_header' style={{color:'black'}}>
					{service.content?.qualificationsHeader}
				</h1>

				{service.content?.qualifiers.map((item,i) => (

					<Flex 
						key={i}
						className='
							items-center
							w-full
							gap-5
							md:ml-10
							ml-0
						'
					>
						<IoMdCheckboxOutline size={32} color='black'/>
						
						<Flex className='flex-col'>
							<h3 className='text-black font-bold'>
								{item.header}
							</h3>

							<p>
								{item.qualifier}
							</p>
						</Flex>


					</Flex>

				))}


				{qualBlocks.map((item,i) => (
					<p key={i}>
						{item}
					</p>
				))}

				<Flex gap={{base:2, md:5}} className='md:flex-row flex-col'>
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
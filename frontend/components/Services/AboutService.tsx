import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import './Services.css'
import BookButton from '../Misc/BookButton'
import CallButton from '../Misc/CallButton'
import WhatsappButton from '../Misc/WhatsappButton'
import { Service } from '@/payload-types'



const AboutService = ({ service } : {service : Service}) => {

	const aboutBlocks = service.content?.aboutParagraphs.split('\n');
	
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
						top-0
						left-0
						w-[45%]

						h-auto
						rounded-xl
						absolute
					'
					src={service.content.aboutImages[0].image.url}
					loading='lazy'
				/>

				<img 
					className='
						bottom-0
						right-0
						w-[45%]


						h-auto
						rounded-xl
						absolute
					'
					src={service.content.aboutImages[1].image.url}
					loading='lazy'
				/>

            </Flex>



            {/* content */}
            <Flex
              className='
                flex-1
				flex-col
              '

			  gap={{base:2, md:5}}
            >
				<h2 className='secondary_header'>
					About Service
				</h2>

				<h1 className='main_header' style={{color:'black'}}>
					{service.content.aboutHeader}
				</h1>

				{aboutBlocks.map((item,i) => (
					<p key={i}>
						{item}
					</p>
				))}

				{/* <p>
					{service.content?.aboutParagraphs}
				</p> */}

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

export default AboutService
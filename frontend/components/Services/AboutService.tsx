import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import './Services.css'
import BookButton from '../Misc/BookButton'
import CallButton from '../Misc/CallButton'
import WhatsappButton from '../Misc/WhatsappButton'

interface AboutServiceContent {
  section: string;
  header: string;
  paragraphs: string[];
  img: string[];
}

interface AboutServiceProps {
  AboutServiceObj: AboutServiceContent;
}


const AboutService = ({ AboutServiceObj } : AboutServiceProps) => {
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
				md:flex-row
				flex-col
            '

			gap={{base:5, md:20}}
        >

            {/* images */}
            <Flex
				className='
					md:w-1/2
					md:flex-1
					w-full
					md:h-auto
					aspect-square
					md:aspect-auto
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
						md:max-w-[300px]
						max-w-[45%]
						h-auto
						rounded-xl
						absolute
					'
					src={AboutServiceObj.img[0]}
					alt={`${AboutServiceObj.section} illustration 1`}
					loading='lazy'
				/>

				<img 
					className='
						bottom-0
						right-0
						md:max-w-[300px]
						max-w-[45%]
						h-auto
						rounded-xl
						absolute
					'
					src={AboutServiceObj.img[1]}
					alt={`${AboutServiceObj.section} illustration 2`}
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
					{AboutServiceObj.section}
				</h2>

				<h1 className='main_header' style={{color:'black'}}>
					{AboutServiceObj.header}
				</h1>

				{AboutServiceObj.paragraphs.map((paragraph,i) => (
					<p key={i}>
						{paragraph}
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

export default AboutService
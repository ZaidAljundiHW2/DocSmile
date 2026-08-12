import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import './Services.css'
import BookButton from '../Misc/BookButton'
import CallButton from '../Misc/CallButton'
import WhatsappButton from '../Misc/WhatsappButton'
import { resolveImg } from '@/utils/resolveImg'

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
						absolute-image
					'
					src={resolveImg(AboutServiceObj.img[0])}
				/>

				<img 
					className='
						bottom-0
						right-0
						absolute-image
					'
					src={resolveImg(AboutServiceObj.img[1])}
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

export default AboutService
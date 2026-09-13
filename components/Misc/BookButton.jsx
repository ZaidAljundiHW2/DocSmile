import React from 'react'
import { Button } from "@chakra-ui/react"
import { FaCalendar } from "react-icons/fa";
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const BookButton = async() => {

  const t = await getTranslations('buttons');


  return (
    <div>
		
		<Link href={'/Booking'}>
			<Button 
				className='button' 
				style={{"--button-bg": "#0071e3"}}

			>

				{t('book')}

				<FaCalendar />
				
			</Button>
		
		</Link>
        

    </div>
    
  )
}

export default BookButton
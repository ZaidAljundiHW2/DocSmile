import React from 'react'
import { Button } from "@chakra-ui/react"
import { FaCalendar } from "react-icons/fa";
import { getTranslations } from 'next-intl/server';

const BookButton = async() => {

  const t = await getTranslations('buttons');


  return (
    <div>
        
        <Button 
            className='button' 
            style={{"--button-bg": "#0071e3"}}

        >

            {t('book')}

            <FaCalendar />
            
        </Button>

    </div>
    
  )
}

export default BookButton
import React from 'react'
import { Button } from "@chakra-ui/react"
import { FaCalendar } from "react-icons/fa";

const BookButton = () => {
  return (
    <div>
        
        <Button 
            className='button' 
            style={{"--button-bg": "#0071e3"}}

        >

            Book Online

            <FaCalendar />
            
        </Button>

    </div>
    
  )
}

export default BookButton
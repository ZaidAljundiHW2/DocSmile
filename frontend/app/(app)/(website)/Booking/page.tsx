import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import BookingMain from '@/components/Booking/BookingMain'

const Booking = () => {
  return (
    <div>
        <ComponentSubheader heading={'Book an Appointment'}/>
        <BookingMain />
        
    </div>
  )
}

export default Booking
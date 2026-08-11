import React from 'react'

const DoctorMiscInfo = ({ doctor, date } : {doctor: string, date: string}) => {
  return (
    <div
        className='
            servicecontainer
            p-10
            flex-col
            gap-2
            bg-white
        '
        style={{
            color:'#808080'
        }}
    >

        {/* Reviewer and review date */}
        <p
            style={{
                color:'#808080'
            }}
        >
            Reviewer: {doctor}, Last Review Date: {date}
        </p>
        
    </div>
  )
}

export default DoctorMiscInfo
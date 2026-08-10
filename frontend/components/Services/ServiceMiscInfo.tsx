import React from 'react'

const ServiceMiscInfo = ({ doctor, date } : {doctor: string, date: string}) => {
  return (
    <div
        className='
            servicecontainer
            p-10
            flex-col
            gap-2
        '
        style={{
            color:'#808080'
        }}
    >
        {/* Explanation that clinical assessment is required. */}
        <p
            style={{
                color:'#808080'
            }}
        >
            Explanation that clinical assessment is required.
        </p>
        
        {/* Medical-information disclaimer. */}
        <h2
            className='
                secondary_header
            '
        >
            Medical-information disclaimer.
        </h2>

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

export default ServiceMiscInfo
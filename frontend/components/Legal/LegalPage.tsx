import React from 'react'
import ComponentSubheader from '../Misc/ComponentSubheader'
import { Legal } from '@/payload-types'

const PrivacyPolicy = ({ heading, text } : { heading : string, text : string }) => {

  const tos = text.split('\n');

  return (
    <div>
        <ComponentSubheader heading={heading}/>

        <div 
          className='
            p-5
            flex
            gap-5
            flex-col
            
          '
        >

          {tos.map((item,i) => (

            <p
              key={i}
              className='
                md:text-start
                text-center
                text-black
              
              '
              
            >
              {item}
            </p>
          ))}
          

        </div>


    </div>
  )
}

export default PrivacyPolicy
import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import type { Config } from '@/payload-types'

async function getTOS() {

    try {

        const req = await fetch(`${process.env.API_URL}/api/globals/legal/tos`);
        const jsonData = await req.json();

        return jsonData;
        
    } catch (error) {
        console.error(error);
    }

}

const TOS = async() => {
    
    const tos = await getTOS();

  return (
    <div>

        <LegalPage heading={'Our Terms of Service'} text={tos.tos}/>
      
    </div>
  )
}

export default TOS

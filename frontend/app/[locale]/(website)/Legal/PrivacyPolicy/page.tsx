import React from 'react'
import LegalPage from '@/components/Legal/LegalPage'

async function getPP() {

    try {

        const req = await fetch(`${process.env.API_URL}/api/globals/legal/pp`);
        const jsonData = await req.json();

        return jsonData;
        
    } catch (error) {
        console.error(error);
    }

}

const PrivacyPolicy = async() => {
    
    const pp = await getPP();




return (
    <div>

        <LegalPage heading={'Our Privacy Policy'} text={pp.pp}/>
    
    </div>
  )
}

export default PrivacyPolicy

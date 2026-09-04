import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import OurLaboratory from '@/components/About/OurLaboratory'


async function getLab() {

  try {

    const res = await fetch(`${process.env.API_URL}/api/globals/about/lab`);

    if (!res.ok) {
      throw new Error('could not fetch lab page');
    }

    const jsonData = await res.json();

    return jsonData.text;
    
    
  } catch (error) {
    console.error(error);
  }


}

const Laboratory = async() => {


  
  const lab = await getLab();

  return (
    <div>

      <ComponentSubheader heading={'Our Laboratory'}/>

      <OurLaboratory text={lab}/>


        
    </div>
  )
}

export default Laboratory
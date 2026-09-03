"use client"
import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import OurLaboratory from '@/components/About/OurLaboratory'
import { useState, useEffect } from 'react'

const Laboratory = () => {


  const [lab, setLab] = useState();
  const [loading, setLoading] = useState(true);

  const getLab = async() => {

    try {

      const res = await fetch('/api/globals/about/lab');

      if (!res.ok) {
        throw new Error('could not fetch lab page');
      }

      const jsonData = await res.json();

      setLab(jsonData.text);
      console.log(jsonData);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    const load = async() => {
      console.log("A");
      await getLab();
      setLoading(false);

    }

    load();

  },[]);

  if (loading) return <p style={{color:'black'}}>Loading...</p>

  return (
    <div>

      <ComponentSubheader heading={'Our Laboratory'}/>

      <OurLaboratory text={lab}/>


        
    </div>
  )
}

export default Laboratory
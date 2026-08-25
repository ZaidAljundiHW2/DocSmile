"use client"
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ServicesGrid from '@/components/Services/ServicesGrid'
import { useEffect } from 'react';
import { useState } from 'react'
// import Breadcrumbs from '../../components/Misc/Breadcrumbs'

const Services = () => {

	// const [routes, setRoutes] = useState(["Services"])

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);


  const getServices = async() => { 

    try {
      
      const res = await fetch('/api/services');

      if (!res.ok) {

				throw new Error('Could not fetch doctors');

			}

      const jsonData = await res.json();
      console.log(jsonData.docs);
      setServices(jsonData.docs);


    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    const load = async() => {
      await getServices();
      setLoading(false);
    }

    load();

  },[])

  if (loading) return <p style={{color:'black'}}>Loading...</p>

  return (
    <div>
        <ComponentSubheader heading={"Services"}/>
		{/* <Breadcrumbs pages={routes}/> */}
		
        <ServicesGrid services={services} />

    </div>
  )
}

export default Services
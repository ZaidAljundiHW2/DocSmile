"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import LegalPage from '@/components/Legal/LegalPage'
import { PayloadSDK } from '@payloadcms/sdk'
import type { Config } from '@/payload-types'
import { getPayload } from 'payload'
import config from '@payload-config'

const TOS = () => {
    
    const sdk = new PayloadSDK<Config>({
        baseURL: '',
    })

    const [tos, setTos] = useState();
    const [loading, setLoading] = useState(true);

    const getTos = async() => {
        try {

            const req = await fetch('/api/globals/legal/tos');
            const jsonData = await req.json();

            console.log('A');
            console.log(jsonData);

            setTos(jsonData);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        const load = async() => {
            await getTos();
            setLoading(false);
        }

        load();

    },[]);

    if (loading) return <p style={{color:'black'}}>Loading...</p>




  return (
    <div>

        <LegalPage heading={'Our Terms of Service'} text={tos.tos}/>
      
    </div>
  )
}

export default TOS

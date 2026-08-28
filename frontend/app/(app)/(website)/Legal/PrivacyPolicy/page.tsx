"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import LegalPage from '@/components/Legal/LegalPage'

const PrivacyPolicy = () => {
    const [pp, setPP] = useState();
    const [loading, setLoading] = useState(true);

    const getPP = async() => {
        try {

            const req = await fetch('/api/globals/legal/pp');
            const jsonData = await req.json();

            setPP(jsonData);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        const load = async() => {
            await getPP();
            setLoading(false);
        }

        load();

    },[]);

    if (loading) return <p style={{color:'black'}}>Loading...</p>




return (
    <div>

        <LegalPage heading={'Our Privacy Policy'} text={pp.pp}/>
    
    </div>
  )
}

export default PrivacyPolicy

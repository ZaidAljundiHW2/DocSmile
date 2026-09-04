
import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader';
import TestimonialTemplate from '@/components/About/TestimonialTemplate';
import { getPayload } from 'payload'
import config from '@payload-config'





const PatientExperiencePage = async({ params } : { params: Promise<{ patient: string }> }) => {

    const patientslug = decodeURIComponent((await params).patient);
    
    const payload = await getPayload({ config });

    const res = await payload.find({

        collection:'testimonials',

        
    })

    const testRes = await payload.find({
        collection:'testimonials',

        where: {

            slug: {

                equals: patientslug
            },

            
        },
        
        limit:1,
        depth:2
    });

    const test = testRes.docs[0];
    

    const allTests = res.docs;
    const testsPerPage = 6;

    const splitTestimonials = async() => {

        const collections = [];

        for (let i = 0; i < allTests.length; i+=testsPerPage) {

            collections.push(allTests.slice(i, i + testsPerPage));

        }

        return collections;


    }

    const collections = await splitTestimonials();

    let currIndex = 0;

    for (const collection of collections) {

        const comps = collection.filter(test => test.slug === patientslug);

        if (comps.length > 0) {
            break;
        }

        currIndex++;



    }

    const currCollection = collections[currIndex].filter(item => item.slug != patientslug);
   

    
    

  return (
    <div>

        <ComponentSubheader heading={test.name}/>

        <TestimonialTemplate test={test} collection={currCollection}/> 

        
    </div>
  )
}

export default PatientExperiencePage
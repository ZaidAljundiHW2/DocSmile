import React from 'react'
import TestimonialsJSON from '@/assets/JSONs/testimonials.json'
import ComponentSubheader from '@/components/Misc/ComponentSubheader';
import { notFound } from 'next/navigation';
import TestimonialTemplate from '@/components/About/TestimonialTemplate';

const PatientsPerPage = 6;

export function generateStaticParams() {
    return TestimonialsJSON.map((testimonial) => ({
        patient: testimonial.slug,
    }))
}

const PatientExperiencePage = async({ params } : { params: Promise<{ patient: string }> }) => {

    const patientslug = decodeURIComponent((await params).patient);
    const patientIndex = TestimonialsJSON.findIndex(item => item.slug === patientslug);

    if (patientIndex === -1) notFound()

    const patient = TestimonialsJSON[patientIndex];

    // which page of 6 this testimonial belongs to, and that page's ids
    const pageStart = Math.floor(patientIndex / PatientsPerPage) * PatientsPerPage;
    const collectionIds = TestimonialsJSON
        .slice(pageStart, pageStart + PatientsPerPage)
        .map(t => t.testimonialid);

  return (
    <div>

        <ComponentSubheader heading={patient.name}/>

        <TestimonialTemplate test={patient} collection={collectionIds}/> 

        
    </div>
  )
}

export default PatientExperiencePage
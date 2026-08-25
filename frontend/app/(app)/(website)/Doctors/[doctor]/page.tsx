import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import DoctorProfileTemplate from '@/components/Doctors/DoctorProfileTemplate'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

export function generateStaticParams() {
    return DoctorsJSON.map((doctor) => ({
        doctor: doctor.slug,
    }))
}


const Doctor = async ({
    params,
}: {
    params: Promise<{ doctor: string }>
}) => {

    const doctorslug = decodeURIComponent((await params).doctor)
    const doctor = DoctorsJSON.find(item => item.slug === doctorslug);

    const payload = await getPayload({config })

    const result = await payload.find({

        collection:'doctors',

        where: {
            slug: {
                equals:doctorslug
            }
        },
        
        limit:1,
        depth:1
    })

    console.log(result);

    if (!doctor) notFound()

    return (
        <div>
            <ComponentSubheader heading={doctor.name} />

            <DoctorProfileTemplate doctor={doctor} />
        </div>
    )
}


export default Doctor
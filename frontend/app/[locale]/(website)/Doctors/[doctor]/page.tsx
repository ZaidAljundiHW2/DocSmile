import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import DoctorProfileTemplate from '@/components/Doctors/DoctorProfileTemplate'
import { getPayload } from 'payload'
import config from '@payload-config'


const Doctor = async ({
    params,
}: {
    params: Promise<{ doctor: string }>
}) => {

    const doctorslug = decodeURIComponent((await params).doctor)

    const payload = await getPayload({ config })

    const result = await payload.find({

        collection:'doctors',

        where: {
            slug: {
                equals:doctorslug
            }
        },
        
        limit:1,
        depth:2
    })
     

    return (
        <div>
            <ComponentSubheader heading={result.docs[0].fullName} />

            <DoctorProfileTemplate doctor={result.docs[0]} />
        </div>
    )
}


export default Doctor
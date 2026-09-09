import React from 'react'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import DoctorProfileTemplate from '@/components/Doctors/DoctorProfileTemplate'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getLocale } from 'next-intl/server'
import { getLocalizedPrefix } from '@/utils/getLocalizedPrefix'

const Doctor = async ({
    params,
}: {
    params: Promise<{ doctor: string }>
}) => {

    const doctorslug = decodeURIComponent((await params).doctor)

    const locale = await getLocale() as 'en' | 'ar' | 'all';

    const payload = await getPayload({ config })

    const result = await payload.find({

        collection:'doctors',

        where: {
            slug: {
                equals:doctorslug
            }
        },
        
        limit:1,
        depth:2,
        locale,
    })

    const rawDoctor = result.docs[0]

    const reviewer =
        rawDoctor.profileReviewer && typeof rawDoctor.profileReviewer === 'object'
            ? {
                ...rawDoctor.profileReviewer,
                prefix: getLocalizedPrefix(
                    rawDoctor.profileReviewer.prefix,
                    locale
                ) as 'Dr.' | 'Mr.' | 'Ms.' | 'Mrs.' | 'Nurse',
            }
            : rawDoctor.profileReviewer

    const doctor = {
        ...rawDoctor,
        prefix: getLocalizedPrefix(
            rawDoctor.prefix,
            locale
        ) as 'Dr.' | 'Mr.' | 'Ms.' | 'Mrs.' | 'Nurse',
        profileReviewer: reviewer,
    }
     

    return (
        <div>
            <ComponentSubheader heading={doctor.fullName} />

            <DoctorProfileTemplate doctor={doctor} />
        </div>
    )
}


export default Doctor
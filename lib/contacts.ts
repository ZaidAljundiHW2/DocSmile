'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export const createContactQuery = async (data: {
    name: string
    phoneNumber: string
    relevantDoctor: string | null
    message: string
}) => {

    const payload = await getPayload({ config })

    let relevantDoctorId: number | null = null

    if (data.relevantDoctor) {
        const result = await payload.find({
            collection: 'doctors',
            where: {
                slug: {
                    equals: data.relevantDoctor
                }
            },
            limit: 1
        })

        relevantDoctorId = result.docs[0]?.id ?? null
    }

    await payload.create({
        collection: 'contact-queries',
        data: {
            slug: data.name,
            name: data.name,
            phoneNumber: data.phoneNumber,
            relevantDoctor: relevantDoctorId,
            message: data.message
        }
    })
}
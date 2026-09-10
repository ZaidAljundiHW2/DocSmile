// lib/actions/appointments.ts

'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export const createAppointmentRequest = async (data: {
    name: string
    phoneNumber: string
    preferredDoctor: string | null
    reason: string
}) => {

    const payload = await getPayload({ config })

    let preferredDoctorId: number | null = null

    if (data.preferredDoctor) {
        const result = await payload.find({
            collection: 'doctors',
            where: {
                slug: {
                    equals: data.preferredDoctor
                }
            },
            limit: 1
        })

        preferredDoctorId = result.docs[0]?.id ?? null
    }

    await payload.create({
        collection: 'appointment-requests',
        draft: false,
        data: {
            slug: data.name,
            name: data.name,
            phoneNumber: data.phoneNumber,
            preferredDoctor: preferredDoctorId,
            reason: data.reason
        }
    })
}
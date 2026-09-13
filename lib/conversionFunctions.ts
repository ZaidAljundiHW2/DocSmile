'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export const convertAppointmentRequest = async (id: string) => {
    const payload = await getPayload({ config })

    const request = await payload.findByID({
        collection: 'appointment-requests',
        id
    })

    const appointment = await payload.create({
        collection: 'appointments',
        draft: false,
        data: {
            name: request.name,
            phoneNumber: request.phoneNumber,
            assignedDoctor:
                typeof request.preferredDoctor === 'object'
                    ? request.preferredDoctor?.id
                    : request.preferredDoctor,
            notes: request.reason,
        },
    })

    return appointment.id

}

export const deleteAppointmentRequest = async (id: string) => {
    const payload = await getPayload({ config })

    await payload.delete({
        collection: 'appointment-requests',
        id
    })


}

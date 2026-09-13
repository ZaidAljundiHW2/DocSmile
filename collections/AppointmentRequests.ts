import type { CollectionConfig } from 'payload'

export const AppointmentRequests: CollectionConfig = {
  slug: 'appointment-requests',

  admin: {
    components: {
      edit: {
        beforeDocumentControls: ['@/components/Payload/ConvertButton'],
      },
    },
  },

  fields: [
    
    { label: 'Submitter Name', name: 'name', type: 'text' },
    { label: 'Submitter Phone Number', name: 'phoneNumber', type: 'text' },
    {
      label: 'Preferred Doctor',
      name: 'preferredDoctor',
      type: 'relationship',
      relationTo: 'doctors',
    },
    { label: 'Reason for Visit', name: 'reason', type: 'textarea' },
  ],

  endpoints: [
    {
      method: 'post',
      path: '/add-appointment-request',
      handler: async (req) => {
        const data = await req.json!()

        let preferredDoctorId: number | null = null

        if (data.preferredDoctor) {
          const match = await req.payload.find({
            collection: 'doctors',
            where: {
              slug: {
                equals: data.preferredDoctor,
              },
            },
            limit: 1,
          })

          preferredDoctorId = match.docs[0]?.id ?? null
        }

        await req.payload.create({
          collection: 'appointment-requests',
          draft: false,
          data: {
            slug: data.name,
            name: data.name,
            phoneNumber: data.phoneNumber,
            preferredDoctor: preferredDoctorId,
            reason: data.reason,
          },
        })

        return Response.json('Appointment request added successfully')
      },
    },

    {
      // POST /api/appointment-requests/:id/convert
      method: 'post',
      path: '/:id/convert',
      handler: async (req) => {
        const { id } = req.routeParams as { id: string }

        const request = await req.payload.findByID({
          collection: 'appointment-requests',
          id,
        })

        const appointment = await req.payload.create({
          collection: 'appointments',
          draft: false,
          data: {
            slug: `appointment-${request.id}`,
            name: request.name,
            phoneNumber: request.phoneNumber,
            assignedDoctor:
              typeof request.preferredDoctor === 'object'
                ? request.preferredDoctor?.id
                : request.preferredDoctor,
            notes: request.reason,
          },
        })

        return Response.json({ appointmentId: appointment.id })
      },
    },
  ],
}
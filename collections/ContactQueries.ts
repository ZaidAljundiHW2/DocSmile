import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const ContactQueries: CollectionConfig = {

    slug: 'contact-queries',

    access: {
        'create': () => true
    },

    fields: [

        slugField({ useAsSlug: 'name' }),

        {
            label: 'Submitter Name',
            name: 'name',
            type: 'text'
        },

        {
            label: 'Submitter Phone Number',
            name: 'phoneNumber',
            type: 'text'
        },

        {
            label: 'Relevant Doctor',
            name: 'relevantDoctor',
            type: 'relationship',
            relationTo: 'doctors'
        },

        {
            label: 'Message',
            name: 'message',
            type: 'textarea'
        }
    ],

    endpoints: [

        {
            method: 'post',
            path: '/add-contact',

            handler: async (req) => {

                const data = await req.json();

                let relevantDoctorId: string | null = null;

                if (data.relevantDoctor) {
                    const match = await req.payload.find({
                        collection: 'doctors',
                        where: { slug: { equals: data.relevantDoctor } },
                        limit: 1,
                    });
                    relevantDoctorId = match.docs[0]?.id ?? null;
                }

                await req.payload.create({
                    collection: 'contact-queries',

                    data: {
                        "name": data.name,
                        "phoneNumber": data.phoneNumber,
                        "relevantDoctor": relevantDoctorId,
                        "message": data.message
                    }
                });

                return Response.json('Contact query added successfully');

            }
        }
    ]

}
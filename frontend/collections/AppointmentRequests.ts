import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const AppointmentRequests: CollectionConfig = {

    slug:'appointment-requests',

    fields: [


        slugField({ useAsSlug: 'name' }),

        {
            label:'Submitter Name',
            name:'name',
            type:'text'
        },

        {
            label: 'Submitter Phone Number',
            name:'phoneNumber',
            type:'text'
        },

        {
            label:'Preferred Doctor',
            name:'preferredDoctor',
            type:'text'
        },

        {
            label:'Reason for Visit',
            name:'reason',
            type:'textarea'
        }
    ],

    endpoints: [

        {
            method:'post',
            path:'/add-appointment-request',
            
            handler: async(req) => {
                
                const data = await req.json();
                console.log(data);

                await req.payload.create({
                    collection:'appointment-requests',

                    data: {

                        "name":data.name,
                        "phoneNumber":data.phoneNumber,
                        "preferredDoctor":data.preferredDoctor,
                        "reason":data.reason

                    }
                });

                return Response.json('Appointment request added successfully');

            }
        }
    ]

}
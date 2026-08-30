import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const ContactQueries: CollectionConfig = {

    slug:'contact-queries',

    access: {
        'create': () => true
    },
    
    fields: [

        slugField({ useAsSlug:'name' }),

        {
            label:'Patient Name',
            name:'name',
            type:'text'
        },

        {
            label: 'Patient Phone Number',
            name:'phoneNumber',
            type:'text'
        },

        {
            label:'Relevant Doctor',
            name:'relevantDoctor',
            type:'text'
        },

        {
            label:'Message',
            name:'message',
            type:'textarea'
        }
    ],

    endpoints: [

        {
            method:'post',
            path:'/add-contact',
            
            handler: async(req) => {
                
                const data = await req.json();
                console.log(data);

                await req.payload.create({
                    collection:'contact-queries',

                    data: {

                        "name":data.name,
                        "phoneNumber":data.phoneNumber,
                        "relevantDoctor":data.relevantDoctor,
                        "message":data.message

                    }
                });

                return Response.json('Contact query added successfully');

            }
        }
    ]


}
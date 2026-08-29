import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'


export const Doctors: CollectionConfig = {
  slug: 'doctors',
  admin: {
    useAsTitle: 'fullName',
  },

  access: {
    read: () => true

  },

  fields: [
    
    {
        label:'Photo',
        name:'photo',
        type:'upload',
        relationTo:'media'
    },

    {
        label:'Full Name',
        name:'fullName',
        type:'text'
    },

    slugField({ useAsSlug:'fullName' }),

    {
        label:'Prefix',
        name:'prefix',
        type:'select',
        options: [
            {
                label:'Dr.',
                value:'Dr.'
            },

            {
                label:'Mr.',
                value:'Mr.'
            },

            {
                label:'Ms.',
                value:'Ms.'
            },

            {
                label:'Mrs.',
                value:'Mrs.'
            },

            {
                label:'Nurse',
                value:'Nurse'
            },
        ]
    },

    {
        label:'Title',
        name:'title',
        type:'text'
    },

    {
        label:'Specialty',
        name:'specialty',
        type:'text'
    },

    {
        label:'Languages',
        name:'languages',
        type:'array',
        fields: [
            {
                label:'Language',
                name:'language',
                type:'text'
            }
        ]
    },


    {
        name:'biography',
        type:'array',
        labels: {
            singular:'Paragraphs',
            plural: 'Paragraphs',
        },
        fields: [
            {
                label:'Paragraph',
                name:'paragraph',
                type:'textarea'
            }
        ]
    },

    {
        label:'Education',
        name:'education',
        type:'text'
    },

    {
        name:'qualifications',
        label: {
            singular:'Qualifications',
            plural:'Qualifications'
        },
        type:'array',
        fields: [
            {
                name:'Qualification',
                type:'text'
            }
        ]
    },

    

    {
        name:'clinicalInterests',
        type:'array',
        label: {
            singular:'Clinical Interests',
            plural:'Clinical Interests'
        },
        fields: [
            {
                label:'Clinical Interest',
                name:'clinicalInterest',
                type:'text'
            }
        ]
    },

    {
        label:'Services',
        name:'services',
        type:'relationship',
        relationTo:'services',
        hasMany:true
    },

    {
        label:'Profile Reviewer',
        name:'profileReviewer',
        type:'relationship',
        relationTo:'doctors'
    },

    

    {
        label:'Review Date',
        name:'reviewDate',
        type:'date'

    },
  ],

  endpoints: [

    {
        path:'/doctor/:slug',
        method:'get',
        handler: async (req) => {
            
            const doctor_slug = req.routeParams.slug;

            if (!doctor_slug) {
                return Response.json({ error: 'not found' }, { status: 404 })
            }

            const result = await req.payload.find({
                collection: 'doctors',
                where: {
                    slug: {
                        equals: doctor_slug,
                    },
                },
                depth: 2,
                limit: 1,
            });

            const doctor = result.docs[0];

            if (!doctor) {
                return Response.json({ error: 'not found' }, { status: 404 })
            }

            return Response.json(doctor);
        },

        
    },

    {
        path:'/numDoctors',
        method:'get',

        handler: async(req) => {


            const result = await req.payload.find({
                collection:'doctors',
                depth:2,
            });

            const doctors = result.docs;

            if (!doctors) {
                return Response.json({ error: 'not found' }, { status: 404 })
            }

            return Response.json(doctors.length);

        }
    }
  ]
}

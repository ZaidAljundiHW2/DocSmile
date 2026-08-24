import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'


export const Doctors: CollectionConfig = {
  slug: 'doctors',
  admin: {
    useAsTitle: 'Full Name',
  },

  fields: [
    
    {
        name:'Photo',
        type:'upload',
        relationTo:'media'
    },

    {
        name:'Full Name',
        type:'text'
    },

    slugField({ useAsSlug:'Full Name' }),

    {
        name:'Prefix',
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
        name:'Title',
        type:'text'
    },

    {
        name:'Specialty',
        type:'text'
    },

    {
        name:'Languages',
        type:'array',
        fields: [
            {
                name:'Language',
                type:'text'
            }
        ]
    },


    {
        name:'Biography',
        type:'array',
        labels: {
            singular: 'Paragraph',
            plural: 'Paragraphs',
        },
        fields: [
            {
                name:'Paragraph',
                type:'textarea'
            }
        ]
    },

    {
        name:'Education',
        type:'text'
    },

    {
        name:'Qualifications',
        label: {
            singular:'Qualification',
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
        name:'Clinical Interests',
        type:'array',
        label: {
            singular:'Clinical Interest',
            plural:'Clinical Interests'
        },
        fields: [
            {
                name:'Clinical Interest',
                type:'text'
            }
        ]
    },

    {
        name:'Services',
        type:'relationship',
        relationTo:'services',
        hasMany:true
    },

    {
        name:'Profile Reviewer',
        type:'relationship',
        relationTo:'doctors'
    },

    

    {
        name:'Review Date',
        type:'date'

    },
  ],
}

import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import type { Testimonial } from '@/payload-types'

export const Testimonials: CollectionConfig = {

    slug:'testimonials',

    access: {
        read: () => true
    },

    fields: [

        {
            label:'Testimonial Image',
            name:'testimonialImage',
            type:'upload',
            relationTo:'media'
        },

        slugField({ useAsSlug : 'name' }),

        {
            label:'Patient Profile Image',
            name:'profileImage',
            type:'upload',
            relationTo:'media'
        },

        {
            label:'Patient Name',
            name:'name',
            type:'text',
            localized:true
        },

        {
            label:'Testimonial',
            name:'testimonial',
            type:'textarea',
            localized:true
        },

        {
            label:'Date',
            name:'date',
            type:'date',
        }
    ]

    
}
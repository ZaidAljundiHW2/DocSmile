import type { CollectionConfig } from 'payload'

export const SocialMedia:CollectionConfig = {

    slug:'social-media',

    fields: [
        {
            name:'Social Media',
            admin: {
                readOnly: true
            },
            type:'text',
        },

        {
            name:'Link',
            type:'text'
        },

        {
            name:'Status',
            type:'radio',
            options: [
                'Disabled',
                'Enabled'
            ]
        }
    ]
}
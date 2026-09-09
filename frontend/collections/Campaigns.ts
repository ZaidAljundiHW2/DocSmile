import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Campaigns: CollectionConfig = {

    slug:'campaigns',
    

    fields: [

        {
            label:"Image",
            name:'image',
            type:'upload',
            relationTo:'media'
        },

        {
            label:'Campaign Main Header',
            name:'mainHeader',
            type:'text',
            localized: true
        },

        {
            label:'Campaign Secondary Header',
            name:'secondaryHeader',
            type:'text',
            localized: true
        },

        {
            label:'Campaign Start Date',
            name:'startDate',
            type:'date'
        },

        {
            label:'Campaign End Date',
            name:'endDate',
            type:'date'
        },
        
        slugField({useAsSlug:'mainHeader'}),

        {
            label:'Content',
            name:'content',
            type:'group',
            fields: [

                {
                    label:'Offer',
                    type:'collapsible',
                    fields: [

                        {
                            label:'Header',
                            name:'header',
                            type:'text',
                            localized: true

                        },

                        {
                            label:'Text',
                            name:'text',
                            type:'textarea',
                            localized: true
                        },

                        {
                            label:'Original Price',
                            name:'originalPrice',
                            type:'text'
                        },

                        {
                            label:'New Price',
                            name:'newPrice',
                            type:'text'
                        },

                        {
                            label:'Campaign Privileges',
                            name:'privileges',
                            type:'array',
                            fields: [
                                {
                                    label:'Privilege',
                                    name:'privilege',
                                    type:'text',
                                    localized: true
                                }
                            ]
                        }
                    ]
                },

                {
                    label:'Covered Services',
                    name:'coveredServices',
                    type:'relationship',
                    hasMany:true,
                    relationTo:'services',
                },

                {
                    label:'FAQs',
                    name:'FAQs',
                    type:'array',
                    fields: [
                        {
                            label:'Question',
                            name:'question',
                            type:'text',
                            localized:true
                        },

                        {
                            label:'Answer',
                            name:'answer',
                            type:'text',
                            localized:true
                        }
                    ]

                },
            ]

        }
    ]
}
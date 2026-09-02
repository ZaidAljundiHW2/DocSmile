import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },

  access: {
    read: () => true
  },

  fields: [

    {
        label:'Image',
        name:'image',
        type:'upload',
        relationTo:'media'
        // not localized — same asset across locales
    },

    {
        label:'Banner',
        name:'banner',
        type:'upload',
        relationTo:'media'
        // not localized
    },

    {
        label:'Name',
        name:'name',
        type:'text',
        localized:true
    },

    {
        label:'Short Introduction',
        name:'introduction',
        type:'text',
        localized:true
    },

    slugField({ useAsSlug:'name' }),
    // see note below re: whether this should be localized

    {
        label:'Content',
        name:'content',
        type:'group',
        fields: [

            {
                label:'About',
                type:'collapsible',
                fields: [

                    {
                        label:'About Header',
                        name:'aboutHeader',
                        type:'text',
                        localized:true
                    },

                    {
                        label:'About Paragraphs',
                        name:'aboutParagraphs',
                        type:'array',
                        maxRows:3,
                        fields: [
                            {
                                label:'Paragraph',
                                name:'paragraph',
                                type: 'textarea',
                                localized:true
                            }
                        ]
                    },

                    {
                        label:'About Images',
                        name:'aboutImages',
                        type: 'array',
                        maxRows:2,
                        fields: [
                            {
                                label:'Image',
                                name:'image',
                                type:'upload',
                                relationTo:'media'
                                // not localized
                            }
                        ]
                    }
                ]
            },

            {
                label:'Qualifications',
                type:'collapsible',
                fields: [
                    {
                        label:'Qualifications Header',
                        name:'qualificationsHeader',
                        type:'text',
                        localized:true
                    },

                    {
                        label:'Qualifications',
                        name:'qualificationsParagraphs',
                        type:'array',
                        maxRows:2,
                        fields: [
                            {
                                label:'Paragraph',
                                name:'paragraph',
                                type: 'textarea',
                                localized:true
                            }
                        ]
                    },

                    {
                        label:'Qualifiers',
                        name:'qualifiers',
                        type:'array',
                        maxRows:3,
                        fields: [
                            {
                                label:'Header',
                                name:'header',
                                type:'text',
                                localized:true
                            },

                            {
                                label:'Qualifier',
                                name:'qualifier',
                                type:'text',
                                localized:true
                            }
                        ]
                    },

                    {
                        label:'Qualifications Images',
                        name:'qualificationsImages',
                        type: 'array',
                        maxRows:2,
                        fields: [
                            {
                                label:'Image',
                                name:'image',
                                type:'upload',
                                relationTo:'media'
                                // not localized
                            }
                        ]
                    }
                ]
            },

            {
                label:'Benefits',
                type:'collapsible',
                fields: [
                    {
                        label:'Benefits Header',
                        name:'benefitsHeader',
                        type:'text',
                        localized:true
                    },

                    {
                        label:'Benefits',
                        name:'benefits',
                        type:'array',
                        maxRows:6,
                        fields: [
                            {
                                label:'Header',
                                name:'header',
                                type: 'text',
                                required:true,
                                localized:true
                            },

                            {
                                label:'Benefit',
                                name:'benefit',
                                type:'text',
                                required:true,
                                localized:true
                            }
                        ]
                    },

                    {
                        name:'video',
                        label:'Benefits Video',
                        type: 'upload',
                        relationTo:'media'
                        // not localized
                    }
                ]
            },

            {
                label:'Process Steps',
                type:'collapsible',
                fields: [
                    {
                        label:'Process Header',
                        name:'processHeader',
                        type:'text',
                        localized:true
                    },

                    {
                        label:'Steps',
                        name:'steps',
                        type:'array',
                        maxRows:5,
                        fields: [
                            {
                                label:'Header',
                                name:'header',
                                type: 'text',
                                required:true,
                                localized:true
                            },

                            {
                                label:'Step',
                                name:'step',
                                type:'text',
                                required:true,
                                localized:true
                            },

                            {
                                label:'Image',
                                name:'image',
                                type:'upload',
                                relationTo:'media'
                                // not localized
                            }
                        ]
                    },

                ]
            },

            {
                label:'Alternative Treatments',
                type:'collapsible',
                fields: [
                    {
                        label:'Alternative Treatments Header',
                        name:'altHeader',
                        type:'text',
                        localized:true
                    },

                    {
                        label:'Treatments',
                        name:'treatments',
                        type:'array',
                        maxRows:3,
                        fields: [
                            {
                                label:'Header',
                                name:'header',
                                type: 'text',
                                required:true,
                                localized:true
                            },

                            {
                                label:'Treatment',
                                name:'treatment',
                                type:'text',
                                required:true,
                                localized:true
                            },

                            {
                                label:'Image',
                                name:'image',
                                type:'upload',
                                relationTo:'media'
                                // not localized
                            }
                        ]
                    },

                ]
            },

        ]
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

    {
        label:'Relevant Doctors',
        name:'relevantDoctors',
        type:'relationship',
        hasMany:true,
        relationTo:'doctors'
        // not localized — same doctors regardless of language
    },

    {
        label:'Reviewer',
        name:'reviewer',
        type:'relationship',
        relationTo:'doctors'
        // not localized
    },

    {
        label:'Last Review Date',
        name:'lastReviewDate',
        type:'date'
        // not localized
    }

  ],

  endpoints: [

    {
        path:'/numServices',
        method:'get',

        handler: async(req) => {

            const result = await req.payload.find({
                collection:'services',
                depth:2,
            });

            if (!result) {
                return Response.json({ error: 'not found' }, { status: 404 })
            }

            const services = result.docs;

            return Response.json(services.length);

        }
    }
  ]
}
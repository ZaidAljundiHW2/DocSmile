import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },

  access: {
    read:() => true
  },

  fields: [

    {
        label:'Image',
        name:'image',
        type:'upload',
        relationTo:'media'

    },

    {
        label:'Banner',
        name:'banner',
        type:'upload',
        relationTo:'media'

    },

    {
        label:'Name',
        name:'name',
        type:'text'
    },

    {
        label:'Short Introduction',
        name:'introduction',
        type:'text'
    },

    slugField({ useAsSlug:'name' }),

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
                        type:'text'
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
                                type: 'textarea'
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
                        type:'text'
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
                                type: 'textarea'
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
                                type:'text'
                            },

                            {
                                label:'Qualifier',
                                name:'qualifier',
                                type:'text'
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
                        type:'text'
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
                                required:true
                            },

                            {
                                label:'Benefit',
                                name:'benefit',
                                type:'text',
                                required:true
                            }
                        ]
                    },

                    {
                        name:'video',
                        label:'Benefits Video',
                        type: 'upload',
                        relationTo:'media'
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
                        type:'text'
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
                                required:true
                            },

                            {
                                label:'Step',
                                name:'step',
                                type:'text',
                                required:true
                            },

                            {
                                label:'Image',
                                name:'image',
                                type:'upload',
                                relationTo:'media'
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
                        type:'text'
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
                                required:true
                            },

                            {
                                label:'Treatment',
                                name:'treatment',
                                type:'text',
                                required:true
                            },

                            {
                                label:'Image',
                                name:'image',
                                type:'upload',
                                relationTo:'media'
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
                type:'text'
            },

            {
                label:'Answer',
                name:'answer',
                type:'text'
            }
        ]

    },

    {
        label:'Relevant Doctors',
        name:'relevantDoctors',
        type:'relationship',
        hasMany:true,
        relationTo:'doctors'
    },

    {
        label:'Reviewer',
        name:'reviewer',
        type:'relationship',
        relationTo:'doctors'
    },

    {
        label:'Last Review Date',
        name:'lastReviewDate',
        type:'date'

    }


    


  ],
}

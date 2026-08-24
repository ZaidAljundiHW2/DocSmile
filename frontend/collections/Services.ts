import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },

  fields: [

    {
        name:'image',
        type:'upload',
        relationTo:'media'

    },

    {
        name:'banner',
        type:'upload',
        relationTo:'media'

    },

    {
        name:'name',
        type:'text'
    },

    slugField(),

    {
        name:'content',
        type:'group',
        fields: [

            {
                label:'About',
                type:'collapsible',
                fields: [
                    
                    {
                        name:'about_header',
                        type:'text'
                    },

                    {
                        name:'about_paragraphs',
                        type:'array',
                        maxRows:3,
                        fields: [
                            {
                                name:'paragraph',
                                type: 'textarea'
                            }
                        ]
                    },

                    {
                        name:'about_images',
                        type: 'array',
                        fields: [
                            {
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
                        name:'qualifications_header',
                        type:'text'
                    },

                    {
                        name:'qualifications_paragraphs',
                        type:'array',
                        maxRows:3,
                        fields: [
                            {
                                name:'paragraph',
                                type: 'textarea'
                            }
                        ]
                    },

                    {
                        name:'qualifications_images',
                        type: 'array',
                        fields: [
                            {
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
                        name:'benefits_header',
                        type:'text'
                    },

                    {
                        name:'benefits',
                        type:'array',
                        maxRows:6,
                        fields: [
                            {
                                name:'header',
                                type: 'text',
                                required:true
                            },

                            {
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
                        name:'process_header',
                        type:'text'
                    },

                    {
                        name:'steps',
                        type:'array',
                        maxRows:5,
                        fields: [
                            {
                                name:'header',
                                type: 'text',
                                required:true
                            },

                            {
                                name:'step',
                                type:'text',
                                required:true
                            },

                            {
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
                        name:'alt_header',
                        type:'text'
                    },

                    {
                        name:'treatments',
                        type:'array',
                        maxRows:3,
                        fields: [
                            {
                                name:'header',
                                type: 'text',
                                required:true
                            },

                            {
                                name:'step',
                                type:'text',
                                required:true
                            },

                            {
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
        name:'reviewer',
        type:'relationship',
        relationTo:'doctors'
    },

    {
        name:'last review date',
        type:'date'
    }


    


  ],
}

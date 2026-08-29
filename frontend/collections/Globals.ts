import type { GlobalConfig } from 'payload'

export const ClinicGeneralInformation: GlobalConfig = {
  slug: 'clinic-general-information',

  access: {
    read:() => true
  },

  fields: [
    {
      label:'Address',
      name: 'address',
      type:'text'
    },

    {
      label:'Google Maps Link',
      name:'mapsLink',
      type:'text'
    },

    {
      label:'Phone Number',
      name:'phoneNumber',
      type:'text',

    },

    {
      label:'WhatsApp Number',
      name:'whatsapp',
      type:'text'
    },

    {
      label:'Email',
      name:'email',
      type:'text'
    },

    {
      label:'Parking Information',
      name:'parkingInformation',
      type:'text'
    },

    {
      label:'Operation Hours',
      name:'operationHours',
      type:'group',
      fields: [

        {
          label:'Sunday',
          name:'sunday',
          type:'group',
          fields: [
            {
              label:'Open Time',
              name:'openTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Close Time',
              name:'closeTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Closed?',
              name:'closed',
              type:'checkbox'
            }
          ]
        },

        {
          label:'Monday',
          name:'monday',
          type:'group',
          fields: [
            {
              label:'Open Time',
              name:'openTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Close Time',
              name:'closeTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Closed?',
              name:'closed',
              type:'checkbox'
            }
          ]
        },

        {
          label:'Tuesday',
          name:'tuesday',
          type:'group',
          fields: [
            {
              label:'Open Time',
              name:'openTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Close Time',
              name:'closeTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Closed?',
              name:'closed',
              type:'checkbox'
            }
          ]
        },

        {
          label:'Wednesday',
          name:'wednesday',
          type:'group',
          fields: [
            {
              label:'Open Time',
              name:'openTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Close Time',
              name:'closeTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Closed?',
              name:'closed',
              type:'checkbox'
            }
          ]
        },

        {
          label:'Thursday',
          name:'thursday',
          type:'group',
          fields: [
            {
              label:'Open Time',
              name:'openTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Close Time',
              name:'closeTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Closed?',
              name:'closed',
              type:'checkbox'
            }
          ]
        },

        {
          label:'Friday',
          name:'friday',
          type:'group',
          fields: [
            {
              label:'Open Time',
              name:'openTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Close Time',
              name:'closeTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Closed?',
              name:'closed',
              type:'checkbox'
            }
          ]
        },

        {
          label:'Saturday',
          name:'saturday',
          type:'group',
          fields: [
            {
              label:'Open Time',
              name:'openTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Close Time',
              name:'closeTime',
              type:'date',
              admin: {
                date: {
                  pickerAppearance:'timeOnly',
                  displayFormat:'h:mm'
                }
              }
            },

            {
              label:'Closed?',
              name:'closed',
              type:'checkbox'
            }
          ]
        }

        
      ]
    },

    {
      label:'Footer operation details',
      name:'footerHours',
      type:'text'
    },
  ],
}

export const Legal: GlobalConfig = {

  slug:'legal',
  fields: [
    {
      label:'Privacy Policy',
      name:'privacyPolicy',
      type:'textarea'
    },

    {
      label:'Terms of Service',
      name:'tos',
      type:'textarea'
    },

    {
      label:'Cookie Policy',
      name:'cookiePolicy',
      type:'textarea'
    }
  ],

  endpoints: [

    {
      method:'get',
      path:'/tos',
      handler: async (req) => {
        const legal = await req.payload.findGlobal({
          slug: 'legal',
        })

        return Response.json({ tos: legal.tos })
      }

    },

    {
      method:'get',
      path:'/pp',
      handler: async(req) => {
        const legal = await req.payload.findGlobal({
          slug:'legal'
        })

        return Response.json({ pp: legal.privacyPolicy })
      }
    },

    {
      method:'get',
      path:'/cookies',
      handler: async(req) => {
        const legal = await req.payload.findGlobal({
          slug:'legal'
        })

        return Response.json({ cookies: legal.cookiePolicy })
      }
    }
  ]
}

export const Social: GlobalConfig = {

  slug:'social',

  access: {
    read: () => true
  },

  fields: [

    {
      label:'Instagram',
      name:'instagram',
      type:'text'
    },

    {
      label:'Facebook',
      name:'facebook',
      type:'text'
    },

    {
      label:'YouTube',
      name:'youtube',
      type:'text'
    },

    {
      label:'Snapchat',
      name:'snapchat',
      type:'text'
    },

    {
      label:'X',
      name:'x',
      type:'text'
    },

    
  ]
}

export const About: GlobalConfig = {

  slug:'about',
  fields: [
    {
      label:'Mission Statement',
      name:'missionStatement',
      type:'textarea'
    },

    {
      label:'Our Center',
      name:'ourCenter',
      type:'textarea'
    },

    {
      label:'Visitors',
      name:'visitors',
      type:'text'
    },

    {
      label:'Experience Years',
      name:'expYears',
      type:'text'
    },

    {
      label:'Testimonials',
      name:'testimonials',
      type:'array',
      fields: [
        {
          label:'Name',
          name:'name',
          type:'text'
        },

        {
          label:'Testimonial',
          name:'testimonial',
          type:'textarea'
        },

        {
          label:'Date',
          name:'date',
          type:'date',

          admin: {

            date: {

              pickerAppearance:'dayOnly'
            }
          }
        },

        {
          label:'Image',
          name:'image',
          type:'upload',
          relationTo:'media'
        }
      ]
    },

    {
      label:'Our Laboratory',
      name:'laboratory',
      type:'textarea'
    }
  ],

  endpoints: [

    {
      method:'get',
      path:'/AboutUs',
      handler: async(req) => {
        
        const aboutUs = await req.payload.findGlobal({
          
          slug:'about'
        });

        return Response.json({
          mission: aboutUs.missionStatement,
          center: aboutUs.ourCenter,
          visitors: aboutUs.visitors,
          exp: aboutUs.expYears
        })

      }

      
    }
  ]
}

export const PatientInformation: GlobalConfig = {

  slug:'patient-information',

  fields: [

    {
      label:'Your First Visit',
      name:'firstVisit',
      type:'textarea'
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
  ]
}
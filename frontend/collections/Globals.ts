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
      type:'text',
      localized:true
      // street/area names are typically transliterated per language
    },

    {
      label:'Google Maps Link',
      name:'mapsLink',
      type:'text'
      // not localized — same URL
    },

    {
      label:'Phone Number',
      name:'phoneNumber',
      type:'text',
      // not localized — same number
    },

    {
      label:'WhatsApp Number',
      name:'whatsapp',
      type:'text'
      // not localized
    },

    {
      label:'Email',
      name:'email',
      type:'text'
      // not localized
    },

    {
      label:'Parking Information',
      name:'parkingInformation',
      type:'text',
      localized:true
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
              // not localized — the clock time doesn't change per language
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
              // not localized
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
              // not localized
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
      type:'text',
      localized:true
      // free text like "Open daily 9am–6pm" needs translating
    },
  ],
}

export const Legal: GlobalConfig = {

  slug:'legal',
  fields: [
    {
      label:'Privacy Policy',
      name:'privacyPolicy',
      type:'textarea',
      localized:true
    },

    {
      label:'Terms of Service',
      name:'tos',
      type:'textarea',
      localized:true
    },

    {
      label:'Cookie Policy',
      name:'cookiePolicy',
      type:'textarea',
      localized:true
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
      // not localized — same URL/handle
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
      type:'textarea',
      localized:true
    },

    {
      label:'Our Center',
      name:'ourCenter',
      type:'textarea',
      localized:true
    },

    {
      label:'Visitors',
      name:'visitors',
      type:'text',
      // localize if this is prose like "10,000+ happy patients"; drop localized if it's just a raw number
    },

    {
      label:'Experience Years',
      name:'expYears',
      type:'text',
      // same caveat — localize only if it includes translatable words, not just a digit
    },



    {
      label:'Our Laboratory',
      name:'laboratory',
      type:'textarea',
      localized:true
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


    },

    {
      method:'get',
      path:'/lab',
      handler: async(req) => {

        const ourLab = await req.payload.findGlobal({
          slug:'about'
        });

        return Response.json({ text: ourLab.laboratory });
      }
    }
  ]
}

export const PatientInformation: GlobalConfig = {

  slug:'patient-information',

  access: {
    read: () => true
  },

  fields: [

    {
      label:'Your First Visit',
      name:'firstVisit',
      type:'textarea',
      localized:true
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
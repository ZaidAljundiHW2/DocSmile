import type { CollectionConfig } from 'payload'

export const Appointments: CollectionConfig = {

    slug:'appointments',

    fields: [

        {
            label:'Patient Name',
            name:'name',
            type:'text'
        },

        {
            label: 'Patient Number',
            name:'phoneNumber',
            type:'text'
        },

        {
            label:'Assigned Doctor',
            name:'assignedDoctor',
            type:'relationship',
            relationTo:'doctors'
        },

        {
            label:'Service',
            name:'service',
            type:'relationship',
            relationTo:'services'
        },

        {
            label:'Appointment Date and Time',
            name:'dateTime',
            type:'date'
        },

        {
            label:'Additional Notes',
            name:'notes',
            type:'textarea'
        }
    ]

}
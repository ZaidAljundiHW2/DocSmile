import type { GlobalConfig } from 'payload'

export const PhoneNumber: GlobalConfig = {
  slug: 'phone_number',
  fields: [
    {
      name: 'main clinic phone number',
      type:'text'
    },
  ],
}

export const Address: GlobalConfig = {
  slug: 'address',
  fields: [
    {
      name: 'main clinic address',
      type:'text'
    },
  ],
}
// lib/actions.ts
'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { getLocale } from 'next-intl/server'

export async function getTelNumberAction() {
  const payload = await getPayload({ config })
  const result = await payload.findGlobal({ slug: 'clinic-general-information' })
  return result.phoneNumber
}

export async function getWhatsappNumberAction() {
  const payload = await getPayload({ config })
  const result = await payload.findGlobal({ slug: 'clinic-general-information' })
  return result.whatsapp
}

export async function getLocaleAction() {

  const locale = await getLocale();
  return locale;
}
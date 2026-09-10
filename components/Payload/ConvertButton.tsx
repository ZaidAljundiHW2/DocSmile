'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, useDocumentInfo, toast } from '@payloadcms/ui'
import {
convertAppointmentRequest,
deleteAppointmentRequest
} from '@/lib/conversionFunctions'

export default function ConvertButton() {
  const { id } = useDocumentInfo()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
  if (!id) {
  toast.error('Save this request first')
  return
  }

  setLoading(true)

  try {
    const appointmentId = await convertAppointmentRequest(String(id))

    toast.success('Appointment created')

    const shouldDelete = window.confirm(
      'Delete this appointment request now that it has been converted?',
    )

    if (shouldDelete) {
      try {
        await deleteAppointmentRequest(String(id))
        toast.success('Request deleted')
      } catch {
        toast.error('Appointment created, but failed to delete the request')
      }
    }

    window.location.href = `/admin/collections/appointments/${appointmentId}`

  } catch (err) {
    toast.error(err instanceof Error ? err.message : 'Something went wrong')
  } finally {
    setLoading(false)
  }

  }

  return ( <Button onClick={handleClick} disabled={loading}>
    {loading ? 'Converting…' : 'Convert to Appointment'} </Button>
  )
}

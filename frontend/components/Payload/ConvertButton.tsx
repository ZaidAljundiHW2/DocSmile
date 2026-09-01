'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, useDocumentInfo, toast } from '@payloadcms/ui'

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
      const res = await fetch(`/api/appointment-requests/${id}/convert`, {
        method: 'POST',
        credentials: 'include',
      })

      if (!res.ok) throw new Error('Conversion failed')
      const { appointmentId } = await res.json()

      toast.success('Appointment created')

      const shouldDelete = window.confirm(
        'Delete this appointment request now that it has been converted?',
      )

      // in ConvertButton.tsx
      if (shouldDelete) {
        const del = await fetch(`/api/appointment-requests/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        })
        if (!del.ok) {
          toast.error('Appointment created, but failed to delete the request')
        } else {
          toast.success('Request deleted')
        }
      }

      // hard navigation instead of router.push — avoids stale admin context
      // when crossing from a just-deleted doc into a different collection's edit view
      window.location.href = `/admin/collections/appointments/${appointmentId}`
      
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={loading}>
      {loading ? 'Converting…' : 'Convert to Appointment'}
    </Button>
  )
}

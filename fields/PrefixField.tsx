'use client'
import React from 'react'
import { useLocale, useField, SelectInput } from '@payloadcms/ui'

const optionsByLocale: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: 'Dr.', value: 'Dr.' },
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Ms.', value: 'Ms.' },
    { label: 'Mrs.', value: 'Mrs.' },
    { label: 'Nurse', value: 'Nurse' },
  ],
  ar: [
    { label: 'د.', value: 'Dr.' },
    { label: 'السيد', value: 'Mr.' },
    { label: 'الآنسة', value: 'Ms.' },
    { label: 'السيدة', value: 'Mrs.' },
    { label: 'ممرضة', value: 'Nurse' },
  ],
}

export const PrefixField: React.FC<any> = (props) => {
  const locale = useLocale()
  const { value, setValue, path } = useField<string>({ path: props.path })

  const options = optionsByLocale[locale.code] ?? optionsByLocale.en

  return (
    <div className="field-type select">
      <label className="field-label" htmlFor={`field-${path}`}>
        {typeof props.field.label === 'string' ? props.field.label : 'Prefix'}
      </label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        onChange={(option: any) => setValue(option?.value ?? null)}
      />
    </div>
  )
}

export default PrefixField
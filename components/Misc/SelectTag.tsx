import React from 'react'
import { NativeSelect, Field } from "@chakra-ui/react"

interface ReqSelectContent {
    placeholder?: string,
    value?: string,
    label: string,
    setSelect: (value: string) => void,
    required: boolean,
    isError: boolean,
    disabled?: boolean,
    options: string[]
}

interface ReqSelectProps {
    selectObj: ReqSelectContent
}

const SelectTag = ({ selectObj }: ReqSelectProps) => {
  return (
    <Field.Root 
        required={selectObj.required} 
        disabled={selectObj.disabled} 
        invalid={selectObj.isError} 
        color={'black'} 
        bg={'white'}
    >
        <Field.Label>
            {selectObj.label} <Field.RequiredIndicator />
        </Field.Label>

        <NativeSelect.Root variant={'outline'} color={'black'} bg={'white'}>
            <NativeSelect.Field 
                bg={'white'}
                color={'black'}
                style={{ colorScheme: 'light' }}
                value={selectObj.value}
                onChange={(e) => selectObj.setSelect(e.target.value)}
            >
                <option value="" style={{ color: 'black', background: 'white' }}>
                    {selectObj.placeholder ?? "Select option"}
                </option>

                {selectObj.options.map((item, i) => (
                    <option 
                        key={i} 
                        value={item}
                        style={{ color: 'black', background: 'white' }}
                    >
                        {item}
                    </option>
                ))}
            </NativeSelect.Field>
            
            <NativeSelect.Indicator />
        </NativeSelect.Root>

    </Field.Root>
  )
}

export default SelectTag
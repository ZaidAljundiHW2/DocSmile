"use client"
import React from 'react'
import { Field, Input, InputGroup } from "@chakra-ui/react"

interface ReqInputContent {
    placeholder?: string,
    value?: string,
    setInput: (value: string) => void,
    required: boolean,
    isError: boolean,
    label: string,
    disabled?: boolean,
    number?: boolean
}

interface ReqInputProps {
    inputObj: ReqInputContent
}

const InputTag = ({ inputObj }: ReqInputProps) => {
  return (
    <Field.Root 
        required={inputObj.required} 
        invalid={inputObj.isError} 
        color={'black'} 
        bg={'white'}
    >
        <Field.Label>
            {inputObj.label} <Field.RequiredIndicator />
        </Field.Label>

        {inputObj.number ? (
            <InputGroup 
				startAddon="+965"
				startAddonProps={{
					bg: 'white',
					color: 'black',
				}}
			>
                <Input 
                    placeholder={inputObj.placeholder ?? ""}
                    color={'black'}
                    bg={'white'}
                    value={inputObj.value}
                    onChange={(e) => inputObj.setInput(e.target.value)}
                    disabled={inputObj.disabled}
                />
            </InputGroup>
        ) : (
            <Input 
                placeholder={inputObj.placeholder ?? ""}
                variant={'flushed'}
                color={'black'}
                bg={'white'}
                value={inputObj.value}
                onChange={(e) => inputObj.setInput(e.target.value)}
                disabled={inputObj.disabled}
            />
        )}

        <Field.ErrorText>This field is required</Field.ErrorText>
    </Field.Root>
  )
}

export default InputTag
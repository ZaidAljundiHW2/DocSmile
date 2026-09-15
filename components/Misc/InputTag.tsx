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
    number?: boolean,
    errorMessage: string,
    validateFunction?: () => void
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
                    colorPalette={'gray'}
                    bg={'white'}
                    value={inputObj.value}
                    onChange={(e) => inputObj.setInput(e.target.value)}
                    disabled={inputObj.disabled}
                    onBlur={inputObj.validateFunction}
                    borderColor={'gray.300'}
                    _focus={{ borderColor: 'gray.500' }}
                />
            </InputGroup>
        ) : (
            <Input 
                placeholder={inputObj.placeholder ?? ""}
                variant={'flushed'}
                borderColor={'gray.300'}
                _focus={{ borderColor: 'gray.500' }}
                color={'black'}
                value={inputObj.value}
                onChange={(e) => inputObj.setInput(e.target.value)}
                disabled={inputObj.disabled}
                onBlur={inputObj.validateFunction}
            />
        )}

        <Field.ErrorText width={'100%'}>
            <Field.ErrorIcon />
            {inputObj.errorMessage}
        </Field.ErrorText>
    </Field.Root>
  )
}

export default InputTag
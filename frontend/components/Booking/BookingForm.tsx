"use client"
import React, { useState } from 'react'
import { Field, Textarea, Button, Checkbox, Input, Flex } from "@chakra-ui/react"
import InputTag from '../Misc/InputTag';
import SelectTag from '../Misc/SelectTag';
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import ServicesJSON from '@/assets/JSONs/services.json'
import { redirect, RedirectType } from 'next/navigation'


const BookingForm = () => {

    // preferred language
    const [language, setLanguage] = useState("");
    const [languageError, setLanguageError] = useState(false);

    const languageSelect = {
        label: "Preferred Language",
        value: language,
        setSelect: setLanguage,
        required: true,
        isError: languageError,
        disabled: false,
        options: ['English', 'Arabic']
    }

    // full name
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const nameInput = {
        placeholder: "Enter Full Name",
        value: name,
        setInput: setName,
        required: true,
        isError: nameError,
        label: "Full Name",
        disabled: false,
    }

    // email
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const emailInput = {
        placeholder: "Enter Email",
        value: email,
        setInput: setEmail,
        required: true,
        isError: emailError,
        label: "Email",
        disabled: false,
    }

    // Kuwait mobile number
    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState(false);

    const numberInput = {
        placeholder: "Enter Mobile Number",
        value: number,
        setInput: setNumber,
        required: true,
        isError: numberError,
        label: "Kuwait Mobile Number",
        disabled: false,
        number: true,
    }

    // new or existing patient
    const [patientType, setPatientType] = useState("");
    const [patientTypeError, setPatientTypeError] = useState(false);

    const patientTypeSelect = {
        label: "New or Returning Patient",
        value: patientType,
        setSelect: setPatientType,
        required: true,
        isError: patientTypeError,
        disabled: false,
        options: ['New Patient', 'Returning Patient']
    }

    // service or department of interest
    const [department, setDepartment] = useState("");
    const [departmentError, setDepartmentError] = useState(false);

    const departmentSelect = {
        label: "Service or Department",
        value: department,
        setSelect: setDepartment,
        required: true,
        isError: departmentError,
        disabled: false,
        options: ServicesJSON.map((s) => s.name)
    }

    // preferred contact method
    const [contact, setContact] = useState("");
    const [contactError, setContactError] = useState(false);

    const contactSelect = {
        label: "Preferred Contact Method",
        value: contact,
        setSelect: setContact,
        required: true,
        isError: contactError,
        disabled: false,
        options: ['Phone Number', 'Email']
    }

    // consent to contact
    const [consent, setConsent] = useState(false);
    const [consentError, setConsentError] = useState(false);

    // preferred doctor (optional)
    const [doctor, setDoctor] = useState("");

    const doctorSelect = {
        label: "Preferred Doctor",
        value: doctor,
        setSelect: setDoctor,
        required: false,
        isError: false,
        disabled: false,
        options: DoctorsJSON.map((d) => d.name)
    }

    // preferred day (optional)
    const [day, setDay] = useState("");

    // preferred time period (optional)
    const [timePeriod, setTimePeriod] = useState("");

    const timePeriodSelect = {
        label: "Preferred Time Period",
        value: timePeriod,
        setSelect: setTimePeriod,
        required: false,
        isError: false,
        disabled: false,
        options: ['Morning', 'Afternoon', 'Evening']
    }

    // short non-clinical note (optional)
    const [note, setNote] = useState("");
    const [noteError, setNoteError] = useState(false);

    const handleSubmit = async() => {

        let redr = true;

        try {

            let hasError = false;

            // if (language.trim().length === 0) {
            //     setLanguageError(true);
            //     hasError = true;
            // } else setLanguageError(false);

            if (name.trim().length === 0) {
                setNameError(true);
                hasError = true;
            } else setNameError(false);

            // if (email.trim().length === 0) {
            //     setEmailError(true);
            //     hasError = true;
            // } else setEmailError(false);

            if (number.trim().length === 0) {
                setNumberError(true);
                hasError = true;
            } else setNumberError(false);

            // if (patientType.trim().length === 0) {
            //     setPatientTypeError(true);
            //     hasError = true;
            // } else setPatientTypeError(false);

            // if (department.trim().length === 0) {
            //     setDepartmentError(true);
            //     hasError = true;
            // } else setDepartmentError(false);

            // if (contact.trim().length === 0) {
            //     setContactError(true);
            //     hasError = true;
            // } else setContactError(false);

            // if (!consent) {
            //     setConsentError(true);
            //     hasError = true;
            // } else setConsentError(false);

            if (note.trim().length === 0) {
                setNoteError(true);
                hasError = true;
            } else setNoteError(false);

            if (hasError) return;

            const data = {
                "name":name,
                "phoneNumber": number,
                "preferredDoctor": doctor,
                "reason": note
            }

            const res = await fetch('/api/appointment-requests/add-appointment-request', {
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                redr = false;
                throw new Error('could not post appointment request');
            }

            
        } catch (error) {
            console.error(error);
        }

        if (redr) redirect('/thank-you', RedirectType.replace);

        

        




    }

  return (
    <div className='flex flex-col gap-3'>
        <InputTag inputObj={nameInput}/>

        {/* <Flex className='gap-5'>
            <InputTag inputObj={emailInput}/>
            <InputTag inputObj={numberInput}/>
        </Flex> */}

        <InputTag inputObj={numberInput}/>

        {/* <Flex className='gap-5'>
            <SelectTag selectObj={languageSelect}/>
            <SelectTag selectObj={patientTypeSelect}/>
        </Flex> */}
        
        {/* <SelectTag selectObj={departmentSelect}/>
        <SelectTag selectObj={contactSelect}/> */}

        <SelectTag selectObj={doctorSelect}/>

        {/* <Flex className='gap-5'>
            <Field.Root color={'black'}>
                <Field.Label>Preferred Day</Field.Label>
                <Input
                    type='date'
                    value={day}
                    onChange={(e) => setDay(e.currentTarget.value)}
                    color={'black'}
                    bg={'white'}
                />
            </Field.Root>

            <SelectTag selectObj={timePeriodSelect}/>

        </Flex> */}
        

        <Field.Root color={'black'}>
            <Field.Label>Reason for Visit</Field.Label>
            <Textarea
                value={note}
                onChange={(e) => setNote(e.currentTarget.value.slice(0, 500))}
                color={'black'}
                bg={'white'}
                maxLength={500}
                style={{ height: '80px' }}
            />
        </Field.Root>

        {/* <Field.Root invalid={consentError} required color={'black'}>
            <Checkbox.Root
                checked={consent}
                onCheckedChange={(e) => setConsent(!!e.checked)}
            >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label color={'black'}>
                    I consent to being contacted regarding this request <Field.RequiredIndicator />
                </Checkbox.Label>
            </Checkbox.Root>

            <Field.ErrorText>You must consent to be contacted</Field.ErrorText>
        </Field.Root> */}

        <Button bg={'#0071e3'} color={'white'} onClick={handleSubmit}>
            Submit
        </Button>
    </div>
  )
}

export default BookingForm
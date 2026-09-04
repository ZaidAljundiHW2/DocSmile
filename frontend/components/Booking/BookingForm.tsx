"use client"
import React, { useState } from 'react'
import { Field, Textarea, Button } from "@chakra-ui/react"
import InputTag from '../Misc/InputTag';
import SelectTag from '../Misc/SelectTag';
import { redirect, RedirectType } from 'next/navigation'
import { Doctor } from '@/payload-types';
import { useTranslations } from 'next-intl';

const BookingForm = ({ doctors } : { doctors : Doctor[] }) => {

    // preferred language
    // const [language, setLanguage] = useState("");
    // const [languageError, setLanguageError] = useState(false);

    // const languageSelect = {
    //     label: "Preferred Language",
    //     value: language,
    //     setSelect: setLanguage,
    //     required: true,
    //     isError: languageError,
    //     disabled: false,
    //     options: ['English', 'Arabic']
    // }

    const t = useTranslations('booking.bookingForm');
    const tMisc = useTranslations('misc');

    // full name
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const nameInput = {
        placeholder: t("fullName.placeholder"),
        value: name,
        setInput: setName,
        required: true,
        isError: nameError,
        errorText: tMisc('errorText'),
        label: t("fullName.label"),
        disabled: false,
    }

    // email
    // const [email, setEmail] = useState("");
    // const [emailError, setEmailError] = useState(false);

    // const emailInput = {
    //     placeholder: "Enter Email",
    //     value: email,
    //     setInput: setEmail,
    //     required: true,
    //     isError: emailError,
    //     label: "Email",
    //     disabled: false,
    // }

    // Kuwait mobile number
    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState(false);

    const numberInput = {
        placeholder: t("mobileNumber.placeholder"),
        value: number,
        setInput: setNumber,
        required: true,
        isError: numberError,
        errorText: tMisc('errorText'),
        label: t("mobileNumber.label"),
        disabled: false,
        number: true,
    }

    // new or existing patient
    // const [patientType, setPatientType] = useState("");
    // const [patientTypeError, setPatientTypeError] = useState(false);

    // const patientTypeSelect = {
    //     label: "New or Returning Patient",
    //     value: patientType,
    //     setSelect: setPatientType,
    //     required: true,
    //     isError: patientTypeError,
    //     disabled: false,
    //     options: ['New Patient', 'Returning Patient']
    // }

    // service or department of interest
    // const [department, setDepartment] = useState("");
    // const [departmentError, setDepartmentError] = useState(false);

    // const departmentSelect = {
    //     label: "Service or Department",
    //     value: department,
    //     setSelect: setDepartment,
    //     required: true,
    //     isError: departmentError,
    //     disabled: false,
    //     options: ServicesJSON.map((s) => s.name)
    // }

    // preferred contact method
    // const [contact, setContact] = useState("");
    // const [contactError, setContactError] = useState(false);

    // const contactSelect = {
    //     label: "Preferred Contact Method",
    //     value: contact,
    //     setSelect: setContact,
    //     required: true,
    //     isError: contactError,
    //     disabled: false,
    //     options: ['Phone Number', 'Email']
    // }

    // consent to contact
    // const [consent, setConsent] = useState(false);
    // const [consentError, setConsentError] = useState(false);

    // preferred doctor (optional)
    const [doctor, setDoctor] = useState("");

    const doctorSelect = {
        label: t("preferredDoctor.label"),
        value: doctor,
        setSelect: setDoctor,
        required: false,
        isError: false,
        disabled: false,
        options: doctors.map((d) => d.fullName)
    }

    // preferred day (optional)
    // const [day, setDay] = useState("");

    // // preferred time period (optional)
    // const [timePeriod, setTimePeriod] = useState("");

    // const timePeriodSelect = {
    //     label: "Preferred Time Period",
    //     value: timePeriod,
    //     setSelect: setTimePeriod,
    //     required: false,
    //     isError: false,
    //     disabled: false,
    //     options: ['Morning', 'Afternoon', 'Evening']
    // }

    // short non-clinical note (optional)
    const [note, setNote] = useState("");
    const [noteError, setNoteError] = useState(false);

    const handleSubmit = async () => {
        let redr = true;

        try {
            let hasError = false;

            if (name.trim().length === 0) {
                setNameError(true);
                hasError = true;
            } else setNameError(false);

            if (number.trim().length === 0) {
                setNumberError(true);
                hasError = true;
            } else setNumberError(false);

            if (note.trim().length === 0) {
                setNoteError(true);
                hasError = true;
            } else setNoteError(false);

            if (hasError) return;

            // resolve the selected fullName back to its slug from the fetched doctors
            const selectedDoctor = doctors.find((d) => d.fullName === doctor);

            const data = {
                "name": name,
                "phoneNumber": number,
                "preferredDoctor": selectedDoctor?.slug ?? null,
                "reason": note
            }

            const res = await fetch(`${process.env.API_URL}/api/appointment-requests/add-appointment-request`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
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
            <InputTag inputObj={nameInput} />
            <InputTag inputObj={numberInput} />
            <SelectTag selectObj={doctorSelect} />

            <Field.Root invalid={noteError} color={'black'}>
                <Field.Label> {t('reasonForVisit.label')} <Field.RequiredIndicator /> </Field.Label>
                <Textarea
                    value={note}
                    onChange={(e) => setNote(e.currentTarget.value.slice(0, 500))}
                    color={'black'}
                    bg={'white'}
                    maxLength={500}
                    style={{ height: '80px' }}
                />

                <Field.ErrorText>
                    {tMisc('errorText')}
                </Field.ErrorText>
            </Field.Root>

            <Button bg={'#0071e3'} color={'white'} onClick={handleSubmit}>
                {t('submit')}
            </Button>
        </div>
    )
}

export default BookingForm
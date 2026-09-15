"use client"
import React, { useState } from 'react'
import { Field, Textarea, Button, Input } from "@chakra-ui/react"
import InputTag from '../Misc/InputTag';
import SelectTag from '../Misc/SelectTag';
import { redirect, RedirectType } from 'next/navigation'
import { Doctor } from '@/payload-types';
import { useTranslations } from 'next-intl';
import { createAppointmentRequest } from '@/lib/appointments';


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

    //honeypot
    const [honeypot, setHoneypot] = useState("");

    // full name
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameErrorText, setNameErrorText] = useState(tMisc('errorText.missingInput'));

    const validateName = async() => {

        if (name.trim().length === 0) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    }

    const nameInput = {
        placeholder: t("fullName.placeholder"),
        value: name,
        setInput: setName,
        required: true,
        isError: nameError,
        errorMessage: nameErrorText,
        label: t("fullName.label"),
        disabled: false,
        validateFunction: validateName
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
    const [numberErrorText, setNumberErrorText] = useState(tMisc('errorText.missingInput'));

    const validateNumber = async() => {

        if (number.trim().length === 0) {
            setNumberError(true);
        } else {
            setNumberError(false);
        }

        const cleanNumber = number.replace(/[\s\-\(\)]/g, '');

        // Validation patterns per CITRA numbering plan (effective April 17, 2009)
        const patterns = {
            landline: /^2[0-9]{7}$/,                // 2XXXXXXX (8 digits)
            mobileVirgin: /^41[0-9]{6}$/,           // 41XXXXXX (8 digits, Virgin Mobile)
            mobile: /^[569][0-9]{7}$/,              // 5XXXXXXX, 6XXXXXXX, or 9XXXXXXX
            corporate: /^18[0-9]{5}$/,              // 18XXXXX (7 digits total)
            tollFree: /^180[0-9]{5}$/,              // 180XXXXX (8 digits total)
            emergency: /^1[0-9]{2}$/,               // 1XX (3 digits total)
            governmentHotline: /^159$/,             // 159 (citizens abroad, effective Sept 2022)
        };

        let nationalNumber = cleanNumber;
        if (cleanNumber.startsWith('+965')) {
            nationalNumber = cleanNumber.substring(4);
        } else if (cleanNumber.startsWith('00965')) {
            nationalNumber = cleanNumber.substring(5);
        }

        for (const pattern of Object.values(patterns)) {
            if (pattern.test(nationalNumber)) {
                setNumberError(false);
                return;
            }
        }

        setNumberError(true);
        setNumberErrorText(tMisc('errorText.phoneNumber'));
        return;
    }

    const numberInput = {
        placeholder: t("mobileNumber.placeholder"),
        value: number,
        setInput: setNumber,
        required: true,
        isError: numberError,
        errorMessage: numberErrorText,
        label: t("mobileNumber.label"),
        disabled: false,
        number: true,
        validateFunction: validateNumber
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
        options: doctors
            .map((d) => d.fullName)
            .filter((name): name is string => name != null)
    }

    // preferred day (optional)
    // const [day, setDay] = useState("");

    // // preferred time period (optional)
    // const [timePeriod, setTimePeriod] = useState("");

    // const timePeriodSelect = {
    //     label: t("preferredTimePeriod.label"),
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
    const [noteErrorText, setNoteErrorText] = useState(tMisc('errorText.missingInput'));

    const validateNote = async() => {

        if (note.trim().length === 0) {
            setNoteError(true);
        } else {
            setNoteError(false);
        }
    }


    const [buttonLoading, setButtonLoading] = useState(false);

    const handleSubmit = async () => {
        
        setButtonLoading(true);
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

            if (hasError) {
                redr = false;
                setButtonLoading(false);
                return;
            };


            const selectedDoctor = doctors.find((d) => d.fullName === doctor);

            const data = {
                "name": name,
                "phoneNumber": number,
                "preferredDoctor": selectedDoctor?.slug ?? null,
                "reason": note,
                "honeypot": honeypot
            }

            const response = await fetch('/api/postBookingForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                redr = false;
                alert('Something went wrong in the submission of your appointment request.');
                throw new Error('Network response was not ok');
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
                    onBlur={validateNote}
                    borderColor={'gray.300'}
                    _focus={{ borderColor: 'gray.500' }}
                />

                <Field.ErrorText>
                    <Field.ErrorIcon />
                    {noteErrorText}
                </Field.ErrorText>
            </Field.Root>

            {/* honeypot field */}
            <Field.Root>
    
                <Input 
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: 'none' }}
                />  
    
            </Field.Root>

            <Button 
            
                bg={'#0071e3'} 
                color={'white'} 
                onClick={handleSubmit}
                loading={buttonLoading}
                disabled={buttonLoading}
            >
                {t('submit')}
            </Button>
        </div>
    )
}

export default BookingForm

"use client"
import React, { useState } from 'react'
import { Field, Textarea, Button, Input } from "@chakra-ui/react"
import InputTag from '../Misc/InputTag';
import SelectTag from '../Misc/SelectTag';
import { redirect, RedirectType } from 'next/navigation'
import { Doctor } from '@/payload-types';
import { useTranslations } from 'next-intl';

const ContactForm = ({ doctors } : { doctors : Doctor[] }) => {

    const t = useTranslations('contact.contactForm');
    
    const tMisc = useTranslations('misc');


    //honeypot
    const [honeypot, setHoneypot] = useState("");

    // name
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
        placeholder: t('name.placeholder'),
        value: name,
        setInput: setName,
        required: true,
        isError: nameError,
        errorMessage: nameErrorText,
        label: t('name.label'),
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

    // number
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
        placeholder: t('phoneNumber.placeholder'),
        value: number,
        setInput: setNumber,
        required: true,
        isError: numberError,
        errorMessage: numberErrorText,
        label: t('phoneNumber.label'),
        disabled: false,
        number: true,

        validateFunction: validateNumber
    }

    // preferred contact method
    // const [contact, setContact] = useState("");
    // const [contactError, setContactError] = useState(false);

    // const contactSelect = {
    //     label: "Enter Preferred Contact Method",
    //     value: contact,
    //     setSelect: setContact,
    //     required: true,
    //     isError: contactError,
    //     disabled: false,
    //     options: ['Phone Number', 'Email']
    // }

    // related doctor (not required)
    const [doctor, setDoctor] = useState("");

    const doctorSelect = {
        label: t('relatedDoctor.label'),
        value: doctor,
        setSelect: setDoctor,
        required: false,
        isError: false,
        disabled: false,
        options: doctors
            .map(item => item.fullName)
            .filter((name): name is string => name != null),
        
        
    }

    // message
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);
    const [messageErrorText, setMessageErrorText] = useState(tMisc('errorText.missingInput'));

    const validateMessage = async() => {

        if (message.trim().length === 0) {
            setMessageError(true);
        } else {
            setMessageError(false);
        }
    }

    const [buttonLoading, setButtonLoading] = useState(false);

    const handleSubmit = async() => {

        setButtonLoading(true);
        let redr = true;

        try {

            let hasError = false;

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

            // if (contact.trim().length === 0) {
            //     setContactError(true);
            //     hasError = true;
            // } else setContactError(false);

            if (message.trim().length === 0) {
                setMessageError(true);
                hasError = true;
            } else setMessageError(false);

            if (hasError) {
                redr = false;
                setButtonLoading(false);
                return;

            } 

            // submit logic goes here

            const selectedDoctor = doctors.find((d) => d.fullName === doctor);
            

            const data = {
                "name": name,
                "phoneNumber": number,
                "relevantDoctor": selectedDoctor?.slug ?? null, 
                "message": message,
                "honeypot": honeypot
            };

            
            const response = await fetch('/api/postContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                redr = false;
                alert('Something went wrong in the submission of your appointment request.');
                throw new Error('Failed to submit contact form');
                
            } 

            
            
        } catch (error) {
            console.error(error)
        }

        if (redr) redirect('/thank-you', RedirectType.replace);

        


    }

  return (
    <div className='flex flex-col gap-3'>
        <InputTag inputObj={nameInput}/>
        {/* <InputTag inputObj={emailInput}/> */}
        <InputTag inputObj={numberInput}/>
        {/* <SelectTag selectObj={contactSelect}/> */}
        <SelectTag selectObj={doctorSelect}/>

        <Field.Root invalid={messageError} required className='w-full' color={'black'}>
            <Field.Label>
                {t('message.label')} <Field.RequiredIndicator />
            </Field.Label>

            <Textarea
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value.slice(0, 800))}
                color={'black'}
                bg={'white'}
                maxLength={800}
                style={{ height: '100px' }}
                onBlur={validateMessage}
            />

            <Field.ErrorText>
                <Field.ErrorIcon />
                {messageErrorText}
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

        <h1 className='text-xs'>
            {tMisc('tosAgree')}
        </h1>
    </div>
  )
}

export default ContactForm
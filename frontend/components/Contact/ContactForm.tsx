"use client"
import React, { useState } from 'react'
import { Field, Textarea, Button } from "@chakra-ui/react"
import InputTag from '../Misc/InputTag';
import SelectTag from '../Misc/SelectTag';
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import { redirect, RedirectType } from 'next/navigation'
import { Doctor } from '@/payload-types';

const ContactForm = ({ doctors } : { doctors : Doctor[] }) => {

    // name
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const nameInput = {
        placeholder: "Enter Name",
        value: name,
        setInput: setName,
        required: true,
        isError: nameError,
        label: "Name",
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

    // number
    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState(false);

    const numberInput = {
        placeholder: "Enter Number",
        value: number,
        setInput: setNumber,
        required: true,
        isError: numberError,
        label: "Phone Number",
        disabled: false,
        number: true,
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
        label: "Related Doctor",
        value: doctor,
        setSelect: setDoctor,
        required: false,
        isError: false,
        disabled: false,
        options: doctors.map(item => item.fullName)
    }

    // message
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = async() => {

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

            if (hasError) return;

            // submit logic goes here

            const selectedDoctor = doctors.find((d) => d.fullName === doctor);
            

            const data = {
                "name": name,
                "phoneNumber": number,
                "relevantDoctor": selectedDoctor?.slug ?? null, 
                "message": message
            };

            const res = await fetch('/api/contact-queries/add-contact', {

                method:'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            });

            if (!res.ok) {
                redr = false;
                throw new Error('could not post contact query');
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
                Message <Field.RequiredIndicator />
            </Field.Label>

            <Textarea
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value.slice(0, 800))}
                color={'black'}
                bg={'white'}
                maxLength={800}
                style={{ height: '100px' }}
            />

            <Field.ErrorText>This field is required</Field.ErrorText>
        </Field.Root>

        <Button bg={'#0071e3'} color={'white'} onClick={handleSubmit}>
            Submit
        </Button>
    </div>
  )
}

export default ContactForm
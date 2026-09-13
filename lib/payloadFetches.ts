import { getPayload } from 'payload'
import config from '@/payload.config'


export const getDoctors = async(locale: 'en' | 'ar' | 'all') => {


    const payload = await getPayload({ config });

    const result = await payload.find({

        collection:'doctors',
        locale
    });

    return result.docs;

}

export const getServices = async(locale: 'en' | 'ar' | 'all') => {


    const payload = await getPayload({ config });

    const result = await payload.find({

        collection:'services',
        locale
    });

    return result.docs;

}

export const getNumDocs = async() => {

    const result = await getDoctors('en');

    return result.length;
}

export const getNumSers = async() => {

    const result = await getServices('en');

    return result.length;
}

export const getAboutUs = async(locale: 'en' | 'ar' | 'all') => {

    const payload = await getPayload({ config });

    const result = await payload.findGlobal({
        slug:'about',
        locale
    });

    return result;
    
}

export const getTestimonials = async(locale: 'en' | 'ar' | 'all') => {

    const payload = await getPayload({ config });

    const result = await payload.find({
        collection:'testimonials',
        locale
    });

    return result.docs;
}

export const getGenDetails = async(locale: 'en' | 'ar' | 'all') => {

    const payload = await getPayload({ config });

    const result = await payload.findGlobal({
        slug:'clinic-general-information',
        locale
    });

    return result;
}

export const getLegal = async(locale : 'en' | 'ar' | 'all', legalType : 'tos' | 'cookiePolicy' | 'privacyPolicy') => {

    const payload = await getPayload({ config });

    const result = await payload.findGlobal({
        slug:'legal',
        locale
    });

    return result[legalType];
}

export const getPatientInformation = async(locale: 'en' | 'ar' | 'all') => {

    const payload = await getPayload({ config });

    const result = await payload.findGlobal({
        slug:'patient-information',
        locale
    });

    return result;
}

export const getSocials = async() => {

    const payload = await getPayload({ config });

    const result = await payload.findGlobal({
        slug:'social'
    });

    return result;

}

export const getTelNumber = async() => {

    const payload = await getPayload({ config });

    const result = await payload.findGlobal({

        slug:'clinic-general-information'
    });

    return result.phoneNumber;
}

export const getWhatsAppNumber = async() => {

    const payload = await getPayload({ config });

    const result = await payload.findGlobal({

        slug:'clinic-general-information'
    });

    return result.whatsapp;
}
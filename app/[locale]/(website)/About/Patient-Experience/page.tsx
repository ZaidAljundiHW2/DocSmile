import PatientExperienceGrid from '@/components/About/PatientExperienceGrid'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import { getLocale } from 'next-intl/server';
import { getTestimonials } from '@/lib/payloadFetches';



const PatientExperience = async() => {

  const locale = await getLocale() as 'en' | 'ar' | 'all';

  const testimonials = await getTestimonials(locale);

  

  return (
    <div>

      <ComponentSubheader heading={'Patient Experiences'}/>

      <PatientExperienceGrid testimonialsObj={testimonials} />
        
    </div>
  )
}

export default PatientExperience
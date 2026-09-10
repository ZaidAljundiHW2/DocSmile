import PatientExperienceGrid from '@/components/About/PatientExperienceGrid'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import { getLocale } from 'next-intl/server';

async function getTestimonials(locale : string) {

  try {

    const res = await fetch(`/api/testimonials?locale=${locale}`);

    if (!res.ok) {
      throw new Error('could not fetch testimonials');


    }
    
    const jsonData = await res.json();
    return jsonData.docs;
    
  } catch (error) {
    console.error(error);
  }
  
}


const PatientExperience = async() => {

  const locale = await getLocale();

  const testimonials = await getTestimonials(locale);

  

  return (
    <div>

      <ComponentSubheader heading={'Patient Experiences'}/>

      <PatientExperienceGrid testimonialsObj={testimonials} />
        
    </div>
  )
}

export default PatientExperience
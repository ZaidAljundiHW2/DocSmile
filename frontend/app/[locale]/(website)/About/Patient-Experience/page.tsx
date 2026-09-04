import PatientExperienceGrid from '@/components/About/PatientExperienceGrid'
import ComponentSubheader from '@/components/Misc/ComponentSubheader'

async function getTestimonials() {

  try {

    const res = await fetch(`${process.env.API_URL}/api/testimonials`);

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

  
  const testimonials = await getTestimonials();

  

  return (
    <div>

      <ComponentSubheader heading={'Patient Experiences'}/>

      <PatientExperienceGrid testimonialsObj={testimonials} />
        
    </div>
  )
}

export default PatientExperience
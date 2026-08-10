import ServiceTemplate from '@/components/Services/ServicesTemplate'
import ServicesJSON from '@/assets/JSONs/services.json'
import DoctorJSON from '@/assets/JSONS/doctors.json'
import FQAsJSON from '@/assets/JSONs/FQAs.json'

const Service = async({ 
    params, 
}: {
    params: Promise< { service: string } >
}) => {

    const serviceSlug = (await params).service;

    const serviceObj = ServicesJSON.find(item => item.slug === serviceSlug);

    const doctors = serviceObj
        ? DoctorJSON.filter(item => item.services.includes(serviceObj.serviceid))
        : [];
    
    const FQAs = serviceObj ? FQAsJSON.filter(item => item.serviceid === serviceObj.serviceid) : [];


  return (
    <div>
        <ServiceTemplate service={serviceObj} doctors={doctors} FQAs={FQAs}/>
    </div>
  )
}

export default Service
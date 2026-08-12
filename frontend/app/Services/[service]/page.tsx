import ServiceTemplate from '@/components/Services/ServicesTemplate'
import ServicesJSON from '@/assets/JSONs/services.json'
import DoctorJSON from '@/assets/JSONs/doctors.json'
import FQAsJSON from '@/assets/JSONs/FQAs.json'

const Service = async({ 
    params, 
}: {
    params: Promise< { service: string } >
}) => {

    const serviceSlug = decodeURIComponent((await params).service);
    console.log("Looking for slug:", JSON.stringify(serviceSlug));

    const serviceObj = ServicesJSON.find(item => item.slug === serviceSlug);
    console.log("Found:", serviceObj?.name);

    const doctors = serviceObj
        ? DoctorJSON.filter(item => item.services.includes(serviceObj.serviceid))
        : [];

    const reviewer = serviceObj
        ? DoctorJSON.find(item => item.doctorid === serviceObj.doctoridreviewer)
        : null;
    
    const FQAs = serviceObj ? FQAsJSON.filter(item => item.serviceid === serviceObj.serviceid) : [];


  return (
    <div>
        <ServiceTemplate service={serviceObj} doctors={doctors} FQAs={FQAs} reviewer={reviewer}/>
    </div>
  )
}

export default Service
import ServiceTemplateBanner from "./ServiceTemplateBanner";
import AboutService from "./AboutService";
import ServiceQualifications from "./ServiceQualifications";
import ServiceBenefits from "./ServiceBenefits";
import ServiceProcess from "./ServiceProcess";
import Doctors from "../Misc/Doctors";
import ServiceFAQs from "./ServiceFAQs";
import Contact from "../Misc/ContactOptions";
import ServiceMiscInfo from "./ServiceMiscInfo";
import ServiceAlts from "./ServiceAlts";
import { Service } from '@/payload-types'




const ServicesTemplate = ({ service } : { service : Service }) => {

  return (

    <div>

        <ServiceTemplateBanner bannerurl={service.banner.url} name={service.name} intro={service.introduction}/>

        <AboutService service={service}/>
        
        <ServiceQualifications service={service}/>

        <ServiceBenefits service={service}/>

        <ServiceProcess service={service}/>
		
		    <ServiceAlts service={service}/>

        <Doctors doctors={service.relevantDoctors} header={service.name + " Doctors"}/>

        <ServiceFAQs FAQObj={service.FAQs}/>

        <Contact isEnquire={false}/>

        <ServiceMiscInfo doctor={service.reviewer.fullName} date={service.lastReviewDate}/>

    </div>
  )
}

export default ServicesTemplate
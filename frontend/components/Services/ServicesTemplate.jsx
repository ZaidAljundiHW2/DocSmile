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

const ServicesTemplate = ({ service, doctors, FAQs, reviewer }) => {

  return (

    <div>

        <ServiceTemplateBanner item={service}/>

        <AboutService AboutServiceObj={service.content.find(item => item.section === "About Service")}/>
        
        <ServiceQualifications ServiceQualificationsObj={service.content.find(item => item.section === "Qualification Requirements")} />

        <ServiceBenefits ServiceBenefitObj={service.content.find(item => item.section === "Benefits")}/>

        <ServiceProcess ServiceProcessObj={service.content.find(item => item.section === "Process")}/>
		
		<ServiceAlts ServiceAltObj={service.content.find(item => item.section === "Alternatives")}/>

        <Doctors doctors={doctors} header={service.name + " Doctors"}/>

        <ServiceFAQs FAQObj={FAQs}/>

		<Contact isEnquire={false}/>

		<ServiceMiscInfo doctor={reviewer.name} date={service.lastreviewdate}/>

    </div>
  )
}

export default ServicesTemplate
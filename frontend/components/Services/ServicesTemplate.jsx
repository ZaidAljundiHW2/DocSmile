import ServiceTemplateBanner from "./ServiceTemplateBanner";
import AboutService from "./AboutService";
import ServiceQualifications from "./ServiceQualifications";
import ServiceBenefits from "./ServiceBenefits";
import ServiceProcess from "./ServiceProcess";
import Doctors from "../Misc/Doctors";
import ServiceFQAs from "./ServiceFQAs";
import Contact from "../Misc/Contact";
import ServiceMiscInfo from "./ServiceMiscInfo";
import ServiceAlts from "./ServiceAlts";

const ServicesTemplate = ({ service, doctors, FQAs }) => {

  return (

    <div>

        <ServiceTemplateBanner item={service}/>

        <AboutService AboutServiceObj={service.content.find(item => item.section === "About Service")}/>
        
        <ServiceQualifications ServiceQualificationsObj={service.content.find(item => item.section === "Qualification Requirements")} />

        <ServiceBenefits ServiceBenefitObj={service.content.find(item => item.section === "Benefits")}/>

        <ServiceProcess ServiceProcessObj={service.content.find(item => item.section === "Process")}/>
		
		<ServiceAlts ServiceAltObj={service.content.find(item => item.section === "Alternatives")}/>

        <Doctors doctors={doctors} header={service.name + " Doctors"}/>

        <ServiceFQAs FQAObj={FQAs}/>

		<Contact isEnquire={false}/>

		<ServiceMiscInfo doctor={doctors.find(item => item.doctorid === service.doctoridreviewer).name} date={service.lastreviewdate}/>

    </div>
  )
}

export default ServicesTemplate
import { useParams } from "react-router-dom"
import ServicesJSON from '@/assets/JSONs/services.json'
import ServiceTemplateBanner from "./ServiceTemplateBanner";

const ServicesTemplate = () => {


    const service = useParams().service;
    const item =  ServicesJSON.find(item => item.name === service);

  return (
    <div>
        <ServiceTemplateBanner item={item}/>
          
    </div>
  )
}

export default ServicesTemplate
import { Button } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({scale=100}) => {
  return (
    <div>
        <Button className="button" style={{"--button-bg": "#25D366", transform:`scale(${scale / 100})`}}>
            WhatsApp Us
            <FaWhatsapp />
        </Button>
        
    </div>
  )
}

export default WhatsappButton
import { Button } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  return (
    <div>
        <Button className="button" style={{"--button-bg": "black"}}>
            Call Us
            <FaPhoneAlt />
        </Button>
        
    </div>
  )
}

export default CallButton
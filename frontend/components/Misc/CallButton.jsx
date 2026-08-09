import { Button } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = ({scale}) => {
  return (
    <div>
        <Button className="button" style={{"--button-bg": "black", transform:`scale(${scale / 100})`}}>
            Call Us
            <FaPhoneAlt />
        </Button>
        
    </div>
  )
}

export default CallButton
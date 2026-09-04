import { Button } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

const CallButton = async() => {

  const t = await getTranslations('buttons');

  return (
    <div>
        <Button className="button" style={{"--button-bg": "black"}}>
            {t('call')}
            <FaPhoneAlt />
        </Button>
        
    </div>
  )
}

export default CallButton
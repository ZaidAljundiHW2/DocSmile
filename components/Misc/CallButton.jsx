import { Button } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

const CallButton = () => {

  const t = useTranslations('buttons');

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
import { Button } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

const WhatsappButton = ({scale=100}) => {

  const t = useTranslations('buttons');
  return (
    <div>
        <Button className="button" style={{"--button-bg": "#25D366", transform:`scale(${scale / 100})`}}>
            {t('whatsapp')}
            <FaWhatsapp />
        </Button>
        
    </div>
  )
}

export default WhatsappButton
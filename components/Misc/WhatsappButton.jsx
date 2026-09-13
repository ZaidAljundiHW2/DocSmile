import { Button } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

const WhatsappButton = ({scale=100, number, locale}) => {

	const telNumber = number;

	let cleanNum = telNumber.replace(/\s/g, "");

	if (cleanNum.includes('+965')) {

		cleanNum = cleanNum.replace('+965', "");
		cleanNum = cleanNum.replace('-', "");
	}

	const t = useTranslations('buttons');

	const message = (locale === "ar" ? "مرحباً%20دكتور%20سمايل.%20أرغب%20في%20المساعدة%20لطلب%20موعد" : "I%20would%20like%20help%20requesting%20an%20appointment");

	return (
		<div>
			<a href={`https://wa.me/+965${cleanNum}?text=${message}`}>
				<Button className="button" style={{"--button-bg": "#25D366", transform:`scale(${scale / 100})`}}>
					{t('whatsapp')}
					<FaWhatsapp />
				</Button>


			</a>
			
			
		</div>
	)
}

export default WhatsappButton
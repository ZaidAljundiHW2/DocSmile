import { Flex } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoDocumentText, IoCalendar } from "react-icons/io5";
import { getLocale, getTranslations } from "next-intl/server";
import { getTelNumber, getWhatsAppNumber } from "@/lib/payloadFetches";
import Link from "next/link";

const ContactOptions = async({ isEnquire = true }) => {

    const t = await getTranslations('misc.contact');
    const telNum = await getTelNumber();
    const wNum = await getWhatsAppNumber();

    const locale = await getLocale();

    let cleanTelNum = telNum.replace(/\s/g, "");
    let cleanWNum = wNum.replace(/\s/g, "");

	if (cleanTelNum.includes('+965')) {

		cleanTelNum = cleanTelNum.replace('+965', "");
		cleanTelNum = cleanTelNum.replace('-', "");

        
	}

    if (cleanWNum.includes('+965')) {

        cleanWNum = cleanWNum.replace('+965', "");
		cleanWNum = cleanWNum.replace('-', "");
    }

	const message = (locale === "ar" ? "مرحباً%20دكتور%20سمايل.%20أرغب%20في%20المساعدة%20لطلب%20موعد" : "I%20would%20like%20help%20requesting%20an%20appointment");


  return (
    <div
        className='
            flex
            flex-row
            p-2
            md:p-5
            gap-2
            md:gap-5
        '
    >

        <a href={`tel:+965${cleanTelNum}`} className="flex flex-1">
            <Flex
                className="
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    text-center
                    scale-90
                    hover:scale-100
                    transition-all
                    cursor-pointer
                    bg-[#071f97]
                    hover:bg-white
                    text-white
                    hover:text-[#071f97]
                    border-2
                    px-2
                    py-3
                    md:px-8
                    md:py-5
                    gap-2
                    md:gap-5
                "
            >
                
                
                <h2 
                    style={{
                        fontWeight:'bold', 
                        fontSize: "clamp(0.75rem, 2.5vw, 2rem)" 
                    }}
                >
                    {t('call')}
                </h2>

                <FaPhoneAlt className="w-4 h-4 md:w-8 md:h-8" />
                

            </Flex>

        </a>
        
        <a href={`https://wa.me/+965${cleanWNum}?text=${message}`} className="flex flex-1">
            <Flex
                className="
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    text-center
                    scale-90
                    hover:scale-100
                    transition-all
                    cursor-pointer
                    bg-[#071f97]
                    hover:bg-white
                    text-white
                    hover:text-[#071f97]
                    border-2
                    px-2
                    py-3
                    md:px-8
                    md:py-5
                    gap-2
                    md:gap-5
                "
            >
                
                
                <h2 
                    style={{
                        fontWeight:'bold', 
                        fontSize: "clamp(0.75rem, 2.5vw, 2rem)" 
                    }}
                >
                    {t('whatsapp')}
                </h2>

                <FaWhatsapp className="w-4 h-4 md:w-8 md:h-8" />
                

            </Flex>

        </a>
        
        <Link href={isEnquire ? '/Contact' : '/Booking'} className="flex flex-1">

            <Flex
                className="
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    text-center
                    scale-90
                    hover:scale-100
                    transition-all
                    cursor-pointer
                    bg-[#071f97]
                    hover:bg-white
                    text-white
                    hover:text-[#071f97]
                    border-2
                    px-2
                    py-3
                    md:px-8
                    md:py-5
                    gap-2
                    md:gap-5
                "
            >
                
                
                <h2 
                    style={{
                        fontWeight:'bold', 
                        fontSize: "clamp(0.75rem, 2.5vw, 2rem)" 
                    }}
                >
                    {isEnquire ? t('enquire') : t('book')}
                </h2>

                {isEnquire ? <IoDocumentText className="w-4 h-4 md:w-8 md:h-8" /> : <IoCalendar className="w-4 h-4 md:w-8 md:h-8" />}
                

            </Flex>
        
        </Link>
        
        
    </div>
  )
}

export default ContactOptions
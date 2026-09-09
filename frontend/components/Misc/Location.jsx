import { Flex, Box } from "@chakra-ui/react"
import '../Home/Home.css'
import { getTranslations } from "next-intl/server";
import WhatsappButton from "./WhatsappButton";
import CallButton from "./CallButton";

const Location = async ({ genDetails }) => {


    const formatTime = (iso) => {
        if (!iso) return '';

        const date = new Date(iso);

        let hours = date.getUTCHours() + 4;
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');

        hours = hours % 24;

        const period = hours >= 12 ? 'PM' : 'AM';
        const hour12 = hours % 12 || 12;

        return `${hour12}:${minutes} ${period}`;
    };

    const t = await getTranslations('home');
    const t2 = await getTranslations('misc');
    const days = t2.raw('days');

    const operationHours = [
        { day: days[0], ...genDetails.operationHours.sunday },
        { day: days[1], ...genDetails.operationHours.monday },
        { day: days[2], ...genDetails.operationHours.tuesday },
        { day: days[3], ...genDetails.operationHours.wednesday },
        { day: days[4], ...genDetails.operationHours.thursday },
        { day: days[5], ...genDetails.operationHours.friday },
        { day: days[6], ...genDetails.operationHours.saturday },
    ].map(d => ({
        day: d.day,
        time: d.closed
            ? t2('closed')
            : `${formatTime(d.openTime)} - ${formatTime(d.closeTime)}`
    }));


    return (
        <div
            className="
                flex
                w-full
                flex-col
                gap-5
                location
                bg-white
                py-5
            "
        >

            <Flex className="items-center gap-5 w-full md:p-10 p-5">
                <h1 className="main_header">
                    {t('location.header')}
                </h1>

                <Box className="flex-1 h-[5px] bg-[#071f97]" />
            </Flex>

            <Flex className="w-full h-full flex-col md:flex-row gap-5">

                <Flex
                    className="
                        md:w-[40%]
                        w-full
                        flex-col
                        h-full
                        gap-2
                        px-10
                    "
                >

                    <p>
                        {t('location.address')}: {genDetails.address}
                    </p>

                    <Flex>
                        <p>{t('location.number')}:&nbsp;</p>

                        <p dir="ltr">
                            +965 {genDetails.phoneNumber}
                        </p>
                    </Flex>

                    <p style={{ fontWeight: 'bold' }}>
                        {t('location.hop')}:
                    </p>

                    <Flex className="flex-col ml-5">

                        {operationHours.map((item, i) => (

                            <Flex
                                key={i}
                                justify="space-between"
                            >

                                <p style={{ fontWeight: 'bold' }}>
                                    {item.day}
                                </p>

                                <p dir="ltr">
                                    {item.time}
                                </p>

                            </Flex>

                        ))}

                    </Flex>

                    <p>
                        {t('location.parking')}: {genDetails.parkingInformation}
                    </p>

                    <Flex className="md:justify-end justify-center items-center gap-5">

                        <CallButton />

                        <WhatsappButton />

                    </Flex>

                </Flex>

                <Flex
                    className="
                        md:w-[60%]
                        w-full
                        items-center
                        justify-center
                        h-full
                        bg-green-500
                    "
                >

                    <h2 className="secondary_header">
                        Map Component
                    </h2>

                </Flex>

            </Flex>

        </div>
    )
}

export default Location
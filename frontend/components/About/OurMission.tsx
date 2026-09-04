import { getTranslations } from "next-intl/server"

const OurMission = async({ mission } : { mission : string }) => {

    const t = await getTranslations('about.OurMission');

  return (
    <div
        className='
            flex
            justify-center
            items-center
            p-10
            bg-white
            flex-col
            gap-5
            text-center
        '
    >

        <h1
            className='
                main_header
            '
            style={{
                color:'black'
            }}
        >
            {t('header')}
        </h1>

        <h2
            className='
                secondary_header
            '
        >
            {mission}
        </h2>
        
    </div>
  )
}

export default OurMission
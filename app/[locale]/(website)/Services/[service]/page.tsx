import ServiceTemplate from '@/components/Services/ServicesTemplate'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getLocale } from 'next-intl/server'
import { getLocalizedPrefix } from '@/utils/getLocalizedPrefix'


const Service = async ({
    params,
}: {
    params: Promise<{ service: string }>
}) => {

    const serviceSlug = decodeURIComponent((await params).service)

    const payload = await getPayload({ config });

    const locale = await getLocale() as 'en' | 'ar' | 'all';

    const result = await payload.find({
        collection:'services',
        where: {

            slug: {

                equals:serviceSlug
            }
        },

        limit:1,
        depth:2,
        locale

    })

    const rawService = result.docs[0]

    const reviewer =
        rawService.reviewer && typeof rawService.reviewer === 'object'
            ? {
                  ...rawService.reviewer,
                  prefix: getLocalizedPrefix(
                      rawService.reviewer.prefix,
                      locale
                  ) as 'Dr.' | 'Mr.' | 'Ms.' | 'Mrs.' | 'Nurse',
              }
            : rawService.reviewer

    const relevantDoctors = Array.isArray(rawService.relevantDoctors)
        ? rawService.relevantDoctors.map((doctor) =>
              doctor && typeof doctor === 'object'
                  ? {
                        ...doctor,
                        prefix: getLocalizedPrefix(
                            doctor.prefix,
                            locale
                        ) as 'Dr.' | 'Mr.' | 'Ms.' | 'Mrs.' | 'Nurse',
                    }
                  : doctor
          )
        : rawService.relevantDoctors

    const service = {
        ...rawService,
        reviewer,
        relevantDoctors,
    }


    return (
        <div>
            <ServiceTemplate
                service={service}
                
            />
        </div>
    )
}


export default Service
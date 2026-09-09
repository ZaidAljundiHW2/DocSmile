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

    const locale = await getLocale();

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
                  prefix: getLocalizedPrefix(rawService.reviewer.prefix, locale),
              }
            : rawService.reviewer

    const relevantDoctors = Array.isArray(rawService.relevantDoctors)
        ? rawService.relevantDoctors.map((doctor: any) =>
              doctor && typeof doctor === 'object'
                  ? { ...doctor, prefix: getLocalizedPrefix(doctor.prefix, locale) }
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
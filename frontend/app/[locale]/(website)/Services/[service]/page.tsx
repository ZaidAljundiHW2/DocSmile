import ServiceTemplate from '@/components/Services/ServicesTemplate'
import { getPayload } from 'payload'
import config from '@payload-config'



const Service = async ({
    params,
}: {
    params: Promise<{ service: string }>
}) => {

    const serviceSlug = decodeURIComponent((await params).service)

    const payload = await getPayload({ config });

    const result = await payload.find({
        collection:'services',
        where: {

            slug: {

                equals:serviceSlug
            }
        },

        limit:1,
        depth:2

    })

    console.log(result)


    return (
        <div>
            <ServiceTemplate
                service={result.docs[0]}
                
            />
        </div>
    )
}


export default Service
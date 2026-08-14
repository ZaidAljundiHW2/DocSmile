import ServiceTemplate from '@/components/Services/ServicesTemplate'
import ServicesJSON from '@/assets/JSONs/services.json'
import DoctorJSON from '@/assets/JSONs/doctors.json'
import FAQsJSON from '@/assets/JSONs/FAQs.json'


export function generateStaticParams() {
    return ServicesJSON.map((service) => ({
        service: service.slug,
    }))
}


const Service = async ({
    params,
}: {
    params: Promise<{ service: string }>
}) => {

    const serviceSlug = decodeURIComponent((await params).service)

    const serviceObj = ServicesJSON.find(
        item => item.slug === serviceSlug
    )

    const doctors = serviceObj
        ? DoctorJSON.filter(
            item => item.services.includes(serviceObj.serviceid)
        )
        : []

    const reviewer = serviceObj
        ? DoctorJSON.find(
            item => item.doctorid === serviceObj.doctoridreviewer
        )
        : null

    const FAQs = serviceObj
        ? FAQsJSON.filter(
            item => item.serviceid === serviceObj.serviceid
        )
        : []

    return (
        <div>
            <ServiceTemplate
                service={serviceObj}
                doctors={doctors}
                FAQs={FAQs}
                reviewer={reviewer}
            />
        </div>
    )
}


export default Service
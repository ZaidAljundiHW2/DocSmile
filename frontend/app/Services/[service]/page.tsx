import ServiceTemplate from '@/components/Services/ServicesTemplate'
import ServicesJSON from '@/assets/JSONs/services.json'
import DoctorJSON from '@/assets/JSONs/doctors.json'
import FQAsJSON from '@/assets/JSONs/FQAs.json'


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

    const FQAs = serviceObj
        ? FQAsJSON.filter(
            item => item.serviceid === serviceObj.serviceid
        )
        : []

    return (
        <div>
            <ServiceTemplate
                service={serviceObj}
                doctors={doctors}
                FQAs={FQAs}
                reviewer={reviewer}
            />
        </div>
    )
}


export default Service
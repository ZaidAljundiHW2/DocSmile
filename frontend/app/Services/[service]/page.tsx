import ServiceTemplate from '@/components/Services/ServicesTemplate'

const Service = ({ 
    params, 
}: {
    params: Promise< { serviceName: string } >
}) => {
  return (
    <div>
        <ServiceTemplate />
    </div>
  )
}

export default Service
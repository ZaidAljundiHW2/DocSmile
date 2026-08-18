import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ServicesGrid from '@/components/Services/ServicesGrid'
// import { useState } from 'react'
// import Breadcrumbs from '../../components/Misc/Breadcrumbs'

const Services = () => {

	// const [routes, setRoutes] = useState(["Services"])

  return (
    <div>
        <ComponentSubheader heading={"Services"}/>
		{/* <Breadcrumbs pages={routes}/> */}
		
        <ServicesGrid />

    </div>
  )
}

export default Services
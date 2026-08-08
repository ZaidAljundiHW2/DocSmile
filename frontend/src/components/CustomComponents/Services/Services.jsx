import ComponentSubheader from '../Misc/ComponentSubheader'
import ServicesGrid from './ServicesComponents/ServicesGrid'
import { useState } from 'react'
import Breadcrumbs from '../Misc/Breadcrumbs'

const Services = () => {

	const [routes, setRoutes] = useState(["Services"])

  return (
    <div>
        <ComponentSubheader heading={"Services"}/>
		<Breadcrumbs pages={routes}/>
		
        <ServicesGrid />

    </div>
  )
}

export default Services
import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ServicesGrid from '@/components/Services/ServicesGrid'
// import Breadcrumbs from '../../components/Misc/Breadcrumbs'
import { getTranslations } from 'next-intl/server';

async function getServices() {

	try {

		const req = await fetch(`${process.env.API_URL}/api/services`);

		if (!req.ok) {

			throw new Error("Could not fetch services");
		}

		const jsonData = await req.json();
		
		return jsonData.docs;

	
	} catch (error) {
		console.error(error);
	}

}

const Services = async() => {

	// const [routes, setRoutes] = useState(["Services"])

  

	const t = await getTranslations('services');
  
  const services = await getServices();

  return (
    <div>
        <ComponentSubheader heading={t('header')}/>
		{/* <Breadcrumbs pages={routes}/> */}
		
        <ServicesGrid services={services} />

    </div>
  )
}

export default Services
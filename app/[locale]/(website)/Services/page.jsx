import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ServicesGrid from '@/components/Services/ServicesGrid'
// import Breadcrumbs from '../../components/Misc/Breadcrumbs'
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';

async function getServices(locale) {

	try {

		const req = await fetch(`/api/services?locale=${locale}`);

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

  
	const locale = await getLocale();

	const t = await getTranslations('services');
  
  	const services = await getServices(locale);

	return (
		<div>
			<ComponentSubheader heading={t('header')}/>
			{/* <Breadcrumbs pages={routes}/> */}
			
			<ServicesGrid services={services} />

		</div>
  	)
}

export default Services
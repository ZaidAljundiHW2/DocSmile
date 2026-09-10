import ComponentSubheader from '@/components/Misc/ComponentSubheader'
import ServicesGrid from '@/components/Services/ServicesGrid'
// import Breadcrumbs from '../../components/Misc/Breadcrumbs'
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import { getServices } from '@/lib/payloadFetches';


const Services = async() => {

	// const [routes, setRoutes] = useState(["Services"])

  
	const locale = await getLocale() as 'en' | 'ar' | 'all';

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
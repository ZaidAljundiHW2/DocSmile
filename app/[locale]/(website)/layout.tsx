// import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getLocale } from "next-intl/server";
import { getSocials, getGenDetails } from "@/lib/payloadFetches";




export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	const locale = await getLocale() as 'en' | 'ar' | 'all';
	

	const [socials, genDetails] = await Promise.all([
		getSocials(),
		getGenDetails(locale)
	]);


	return (
		<>
			<Navbar />
				{children}
			<Footer 
				socials={socials}
				genDetails={genDetails}
			/>
		</>
	);
}
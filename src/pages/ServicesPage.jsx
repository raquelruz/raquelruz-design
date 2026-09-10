import { ServicesHero } from "../components/services/ServicesHero";
import { ServicesProcess } from "../components/services/ServicesProcess";
import { ServicesList } from "../components/services/ServicesList";
import { ServicesCTA } from "../components/services/ServicesCTA";
import { Footer } from "../components/Footer";

export const ServicesPage = () => {
	return (
		<main className="overflow-hidden">
			<ServicesHero />
			<ServicesProcess />
			<ServicesList />
			<ServicesCTA />

			<Footer />
		</main>
	);
};

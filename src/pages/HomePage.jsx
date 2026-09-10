import { HomeHero } from "../sections/Hero";
import { AboutSection } from "../sections/AboutSection";
import { TechStackSection } from "../sections/TechStackSection";
import { ServicesSection } from "../sections/ServicesSection";
import { SelectedWorkSection } from "../sections/SelectedWorkSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../components/Footer";

export const HomePage = () => {
	return (
		<main className="overflow-hidden font-landing">
			<HomeHero />

			<section id="about" aria-label="Sobre mí">
				<AboutSection />
			</section>

			<section aria-label="Tecnologías">
				<TechStackSection />
			</section>

			<section id="servicios" aria-label="Servicios">
				<ServicesSection />
			</section>

			<section id="proyectos" aria-label="Proyectos">
				<SelectedWorkSection />
			</section>

			<section id="contacto" aria-label="Contacto">
				<ContactSection />
			</section>

			<Footer />
		</main>
	);
};

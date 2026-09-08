import { CTAButtons } from "../components/CTAButtons";
import { ServicesSection } from "../sections/ServicesSection";
import profileImage from "../assets/profile/raquelruz-portfolio.png";
import { SelectedWorkSection } from "../sections/SelectedWorkSection";
import { AboutSection } from "../sections/AboutSection";
import { TechStackSection } from "../sections/TechStackSection"
import { ContactSection } from "../sections/ContactSection";

export const HomePage = () => {
	return (
		<main className="font-landing">
			<div className="w-full px-6 md:px-14 lg:px-20 pt-16 pb-24 md:pt-24 md:pb-32">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
					<div className="lg:col-span-6 flex flex-col gap-8">
						<span className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 px-4 py-1.5 text-sm text-secondary">
							Full Stack Developer & Graphic Designer
						</span>

						<h1 className="font-title font-medium text-text text-[2.75rem] leading-[1.05] md:text-6xl lg:text-7xl">
							CONSTRUYENDO EXPERIENCIAS <span className="text-secondary italic">digitales</span>
						</h1>

						<p className="max-w-full md:text-lg text-text/70 text-lg">
							Desarrolladora Full Stack especializada en React, TypeScript y Node.js, combinando
							ingeniería sólida con criterio visual.
						</p>
					</div>

					<div className="lg:col-span-6 flex flex-col items-center">
						<div className="relative flex justify-center">
							<div className="absolute -z-10 bottom-0 h-3/4 w-3/4 rounded-full bg-secondary/20" />

							<img
								src={profileImage}
								alt="Retrato de Raquel, Full Stack Developer"
								className="relative h-auto w-full rounded-3xl object-contain sm:w-80 md:w-full"
							/>
						</div>

						<div className="relative -mt-6 z-20 md:-mt-8">
							<CTAButtons
								primaryHref="#proyectos"
								secondaryHref="mailto:raquelruizlopezcepero@gmail.com"
							/>
						</div>
					</div>
				</div>

				<section id="about" aria-label="Sobre mí" className="w-full mt-20 md:mt-28">
					<AboutSection />
				</section>

				<div className="mt-20 md:mt-28">
					<TechStackSection />
				</div>
			</div>

			<section
				id="servicios"
				aria-label="Servicios"
				className="relative w-full overflow-hidden px-6 py-16 text-text md:px-14 md:py-24 lg:px-20"
			>
				<div className="relative z-10">
					<ServicesSection />
				</div>
			</section>

			<section id="proyectos" aria-label="Proyectos" className="pt-20 md:pt-28">
				<SelectedWorkSection />
			</section>

			<section id="contacto" aria-label="Contacto">
				<ContactSection />
			</section>
		</main>
	);
};

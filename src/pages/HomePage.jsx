import { CTAButtons } from "../components/CTAButtons";
import { ServicesSection } from "../sections/ServicesSection";
import profileImage from "../assets/profile/raquelruz-portfolio.png";
import backgroundHome from "../assets/images/background.png";
import { SelectedWorkSection } from "../sections/SelectedWorkSection";
import { AboutSection } from "../sections/AboutSection";
import { TechStackSection } from "../sections/TechStackSection";

export const HomePage = () => {
	return (
		<section className="font-landing">
			<div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 pt-16 pb-24 md:pt-24 md:pb-32">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
					<div className="lg:col-span-6 flex flex-col gap-8">
						<span className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 px-4 py-1.5 text-sm text-secondary">
							Full Stack Developer & Graphic Designer
						</span>

						<h1 className="font-title font-medium text-text text-[2.75rem] leading-[1.05] md:text-6xl lg:text-7xl">
							CONSTRUYENDO EXPERIENCIAS <span className="text-secondary italic">digitales</span>
						</h1>

						<p className="max-w-full md:text-lg text-text/70">
							Desarrolladora Full Stack especializada en React, TypeScript y Node.js, combinando
							ingeniería sólida con criterio visual.
						</p>
					</div>

					{/* Imagen */}
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

				{/* ABOUT */}
				<div id="about" className="max-w-full mx-auto mt-16 md:px-14 md:pb-32 lg:px-0">
					<AboutSection />
				</div>

				<div>
					<TechStackSection />
				</div>
				
			</div>
			{/* SERVICIOS */}
			<div
				id="servicios"
				className="relative mx-6 overflow-hidden rounded-[40px] bg-background px-6 py-16 text-text md:mx-14 md:px-14 md:py-24 lg:mx-20 lg:px-20"
			>
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
					style={{ backgroundImage: `url(${backgroundHome})` }}
				/>
				<div className="relative z-10">
					<ServicesSection />
				</div>
			</div>

			{/* PROYECTOS */}
			<div id="proyectos" className="pt-20 md:pt-28">
				<SelectedWorkSection />
			</div>
		</section>
	);
};

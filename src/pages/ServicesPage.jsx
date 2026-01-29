import { ServiceCard } from "../components/ServiceCard";
import { SERVICES } from "../utils/servicesData"

export const ServicesPage = () => {
	return (
		<section className="py-24 px-8 md:px-20 bg-[#0B0B0B] font-landing text-white overflow-hidden">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6">
				<h2 className="text-4xl font-semibold">
					Mis <span className="text-secondary">Servicios</span>
				</h2>

				<p className="max-w-xl text-white/70">
					Soluciones digitales pensadas para marcas y proyectos
					que buscan diseño, funcionalidad y coherencia.
				</p>
			</div>

			<div
				className="
					flex gap-6 overflow-x-auto pb-6
					snap-x snap-mandatory scroll-smooth
					[-webkit-overflow-scrolling:touch]
				"
			>
				{SERVICES.map((service) => (
					<div key={service.title} className="snap-start shrink-0">
						<ServiceCard {...service} />
					</div>
				))}
			</div>

		</section>
	);
};

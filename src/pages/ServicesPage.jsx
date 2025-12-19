import { ServiceCard } from "../components/ServiceCard";

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

			{/* Cards */}
			<div className="flex gap-8 overflow-x-auto pb-6">
				<div className="snap-start">
				<ServiceCard
					title="UI / UX Design"
					image="/images/services/uiux.png"
				/></div>
				<ServiceCard
					title="Web Design"
					image="/images/services/web.png"
				/>
				<ServiceCard
					title="Landing Page"
					image="/images/services/landing.png"
				/>
			</div>
		</section>
	);
};

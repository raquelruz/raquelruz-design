import { Link } from "react-router-dom";
import { ServiceCard } from "../components/ServiceCard";
import { HiArrowUpRight } from "react-icons/hi2";
import { SERVICES } from "../utils/servicesData";
import { useInView } from "../hooks/useInView";

export const ServicesSection = () => {
	const [ref, isInView] = useInView();

	let revealClass = "translate-y-8 opacity-0";
	if (isInView) {
		revealClass = "translate-y-0 opacity-100";
	}

	const loopedServices = [...SERVICES, ...SERVICES];

	return (
		<section
			ref={ref}
			className="relative overflow-hidden border-t border-border py-12 pt-10 font-landing text-text md:pt-16"
		>
			<style>{`
				@keyframes services-marquee {
					from { transform: translateX(0); }
					to { transform: translateX(-50%); }
				}
				.services-marquee-track {
					animation: services-marquee 40s linear infinite;
				}
				.services-marquee-track:hover {
					animation-play-state: paused;
				}
				.services-marquee-mask {
					-webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
					mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
				}
				@media (prefers-reduced-motion: reduce) {
					.services-marquee-track { animation: none; }
				}
			`}</style>

			<div className={`relative transition-all duration-1000 ease-out ${revealClass}`}>
				<div className="px-4 flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
					<div>
						<span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
							Servicios
						</span>
						<h2 className="font-title font-light text-text mt-4 text-3xl leading-tight md:text-6xl">
							Cómo puedo <span className="text-secondary/40">ayudarte.</span>
						</h2>
					</div>

					<Link
						to="/services"
						className="group inline-flex w-fit items-center gap-2 rounded-full border border-text/20 px-6 py-3 text-sm font-medium text-text transition-colors hover:border-secondary/40 hover:text-secondary"
					>
						Ver todos
						<HiArrowUpRight
							size={16}
							className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</Link>
				</div>

				<div className="services-marquee-mask overflow-hidden">
					<div className="services-marquee-track flex w-max gap-6 md:gap-8">
						{loopedServices.map((service, index) => (
							<div key={`${service.title}-${index}`} className="w-[85vw] shrink-0 sm:w-96 md:w-104">
								<ServiceCard {...service} index={index % SERVICES.length} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
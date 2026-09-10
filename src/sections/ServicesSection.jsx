import { Link } from "react-router-dom";
import { ServiceCard } from "../components/ServiceCard";
import { HiArrowUpRight } from "react-icons/hi2";
import { SERVICES } from "../data/servicesData";
import { useInView } from "../hooks/useInView";
import { Footer } from "../components/Footer";

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
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }

                .services-marquee-track {
                    animation: services-marquee 40s linear infinite;
                }

                .services-marquee-track:hover {
                    animation-play-state: paused;
                }

                .services-marquee-mask {
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 8%,
                        black 92%,
                        transparent
                    );

                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 8%,
                        black 92%,
                        transparent
                    );
                }

                @media (prefers-reduced-motion: reduce) {
                    .services-marquee-track {
                        animation: none;
                    }
                }
            `}</style>

			<div className={`relative transition-all duration-1000 ease-out ${revealClass}`}>
				<div className="mb-10 flex flex-col gap-6 px-4 md:mb-14 md:flex-row md:items-end md:justify-between">
					<div className=" md:px-10 lg:px-30">
						<h2 className="font-title text-5xl font-light leading-[0.9] tracking-[-0.055em] md:text-7xl">
							Diseño, código y todo lo que hay
							<br />
							<span className="text-secondary">entre medias.</span>
						</h2>
					</div>

					<Link
						to="/services"
						className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-text/20 pb-2 text-xs uppercase tracking-[0.15em] text-text transition-colors duration-300 hover:border-secondary hover:text-secondary"
					>
						Ver servicios
						<HiArrowUpRight
							size={15}
							className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
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

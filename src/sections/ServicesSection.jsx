import { ServiceCard } from "../components/ServiceCard";
import { useRef } from "react";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { SERVICES } from "../utils/servicesData";

export const ServicesSection = () => {
	const scrollRef = useRef(null);

	const featuredServices = SERVICES.slice(0, 4);

	const scroll = (direction) => {
		if (!scrollRef.current) return;
		const viewportWidth = scrollRef.current.clientWidth;
		scrollRef.current.scrollBy({
			left: direction === "left" ? -viewportWidth : viewportWidth,
			behavior: "smooth",
		});
	};

	return (
		<section className="py-12 px-4 font-landing text-text">
			<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
				<div>
					<h2 className="text-3xl font-semibold">
						Mis <span className="text-secondary">Servicios</span>
					</h2>

					<p className="text-lg text-text-muted">
						Diseño y desarrollo para que tu web deje de ser solo bonita y empiece a cumplir un objetivo.
					</p>

					<p className="mt-3 text-sm text-text">
						Haz clic en cada servicio para ver cómo lo aplico en proyectos reales.
					</p>
				</div>

				<a
					href="/services"
					className="inline-flex items-center justify-center rounded-2xl px-6 py-3 border border-border bg-background hover:bg-background-soft transition"
				>
					Ver todos
				</a>
			</div>

			<div className="relative">
				<button
					onClick={() => scroll("left")}
					className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 text-secondary transition"
					aria-label="Scroll left"
				>
					<HiArrowLeftCircle size={36} />
				</button>

				<div
					ref={scrollRef}
					className="flex gap-4 md:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth no-scrollbar px-2 md:px-0 scroll-px-2 md:scroll-px-0"
				>
					{featuredServices.map((service) => (
						<div
							key={service.title}
							className="snap-start shrink-0 basis-full sm:basis-[85%] md:basis-[60%] lg:basis-[40%]"
						>
							<ServiceCard {...service} />
						</div>
					))}
				</div>

				<button
					onClick={() => scroll("right")}
					className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-secondary hover:scale-110 transition"
					aria-label="Scroll right"
				>
					<HiArrowRightCircle size={36} />
				</button>
			</div>

			<div className="mt-2 flex md:hidden items-center gap-2 text-sm text-text-muted">
				<span>Desliza</span>
				<span className="animate-pulse">→</span>
			</div>
		</section>
	);
};

import { ServiceCard } from "../components/ServiceCard";
import { useRef } from "react";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";

export const ServicesSection = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		if (!scrollRef.current) return;

		scrollRef.current.scrollBy({
			left: direction === "left" ? -360 : 360,
			behavior: "smooth",
		});
	};

	return (
		<section className="py-24 px-4 font-landing text-text">

			<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6">
				<h2 className="text-4xl font-semibold">
					Mis <span className="text-secondary">Servicios</span>
				</h2>

				<p className="text-text">
					Diseño y desarrollo de productos digitales con foco en experiencia, identidad y rendimiento.
				</p>
			</div>

			<div className="relative">
				<button
					onClick={() => scroll("left")}
					className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 text-secondary hover:scale-110 transition"
					aria-label="Scroll left"
				>
					<HiArrowLeftCircle size={36} />
				</button>

				{/* Cards */}
				<div
					ref={scrollRef}
					className="flex gap-8 overflow-x-auto overflow-y-visible pb-6 no-scrollbar scroll-smooth snap-x snap-mandatory"
				>
					<div className="snap-start">
						<ServiceCard
							title="UI / UX Design"
							image="/src/assets/images/services/woodline-panel.png"
							description="Interfaces intuitivas y experiencias digitales centradas en el usuario."
						/>
					</div>

					<div className="snap-start">
						<ServiceCard
							title="Desarrollo web"
							image="/src/assets/images/services/website.png"
							description="Diseño y desarrollo web a medida."
						/>
					</div>

					<div className="snap-start">
						<ServiceCard
							title="Landing Page"
							image="/src/assets/images/services/rehabisur.png"
							description="Landing pages optimizadas para convertir y comunicar con claridad."
						/>
					</div>

					<div className="snap-start">
						<ServiceCard
							title="Branding"
							image="/src/assets/images/services/rotuwear.png"
							description="Identidades visuales coherentes que transmiten personalidad y confianza."
						/>
					</div>

					<div className="snap-start">
						<ServiceCard
							title="Redes Sociales"
							image="/images/services/social.png"
							description="Diseño visual para redes sociales con coherencia y estilo de marca."
						/>
					</div>
				</div>

				<button
					onClick={() => scroll("right")}
					className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-secondary hover:scale-110 transition"
					aria-label="Scroll right"
				>
					<HiArrowRightCircle size={36} />
				</button>

			</div>

			<div className="mt-6 flex md:hidden items-center gap-2 text-sm text-text-muted">
				<span>Desliza</span>
				<span className="animate-pulse">→</span>
			</div>

		</section>
	);
};
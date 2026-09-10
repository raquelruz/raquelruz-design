import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

import { useInView } from "../../hooks/useInView";

export const ServicesCTA = () => {
	const [ctaRef, isCTAVisible] = useInView({
		threshold: 0.15,
	});

	let reveal = "translate-y-10 opacity-0";
	let titleReveal = "translate-y-12 opacity-0";

	if (isCTAVisible) {
		reveal = "translate-y-0 opacity-100";
		titleReveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={ctaRef} className="relative overflow-hidden bg-secondary font-landing text-background">
			<div className="pointer-events-none absolute -right-20 -top-32 font-title text-[20rem] font-light leading-none tracking-[-0.08em] text-background/6 md:text-[32rem]">
				→
			</div>

			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-36 lg:px-16">
				<div className="grid gap-12 md:grid-cols-12 md:items-end">
					<div className="md:col-span-9">
						<p
							className={`font-mono text-[9px] uppercase tracking-[0.2em] text-background/60 transition-all duration-700 ${reveal}`}
						>
							Siguiente paso
						</p>

						<h2
							className={`mt-7 font-title text-6xl font-light leading-[0.85] tracking-[-0.06em] transition-all duration-1100 md:text-8xl lg:text-[8rem] ${titleReveal}`}
						>
							¿Tienes algo
							<br />
							en mente?
						</h2>
					</div>

					<div
						className={`md:col-span-3 md:flex md:justify-end transition-all delay-200 duration-900 ${reveal}`}
					>
						<Link
							to="/contact"
							aria-label="Ir a contacto"
							className="group/cta flex h-24 w-24 items-center justify-center rounded-full border border-background/30 transition-all duration-500 hover:-translate-y-2 hover:border-background hover:bg-background md:h-32 md:w-32"
						>
							<HiArrowUpRight
								size={30}
								className="transition-all duration-500 group-hover/cta:rotate-45 group-hover/cta:text-secondary"
							/>
						</Link>
					</div>
				</div>

				<div
					className={`mt-16 text-sm leading-7 text-background/70 transition-all delay-300 duration-900 md:mt-20 md:text-base ${reveal}`}
				>
					Hablemos de lo que tienes en mente y encontremos la mejor forma de convertirlo en algo real.
				</div>
			</div>
		</section>
	);
};

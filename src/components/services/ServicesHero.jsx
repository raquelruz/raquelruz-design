import { useInView } from "../../hooks/useInView";

export const ServicesHero = () => {
	const [heroRef, isHeroVisible] = useInView({
		threshold: 0.15,
	});

	let reveal = "translate-y-8 opacity-0";
	let titleReveal = "translate-y-12 opacity-0";
	let numberReveal = "-translate-y-10 opacity-0";
	let lineReveal = "scale-x-0";

	if (isHeroVisible) {
		reveal = "translate-y-0 opacity-100";
		titleReveal = "translate-y-0 opacity-100";
		numberReveal = "translate-y-0 opacity-100";
		lineReveal = "scale-x-100";
	}

	return (
		<section ref={heroRef} className="relative overflow-hidden font-landing text-text">
			<div
				className={`pointer-events-none absolute -right-10 -top-20 select-none font-title text-[2rem] font-light leading-none tracking-[-0.08em] text-text/2.5 transition-all duration-1600 ease-out md:-right-4 md:-top-8 md:text-[20rem] ${numberReveal}`}
			>
				design & code
			</div>

			<div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-border" />

			<div className="relative mx-auto max-w-325 px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-36 lg:px-16">
				<div className="grid gap-12 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-8">
						<h1
							className={`mt-8 max-w-5xl font-title text-6xl font-light leading-[0.86] tracking-[-0.06em] transition-all duration-1100 ease-out md:text-8xl lg:text-[9rem] ${titleReveal}`}
						>
							Diseño y
							<br />
							<span className="text-secondary">desarrollo.</span>
						</h1>
					</div>

					<div className={`lg:col-span-4 transition-all delay-200 duration-900 ${reveal}`}>
						<p className="text-base leading-7 text-text-muted md:text-lg">
							Creo experiencias digitales combinando diseño, tecnología y una visión centrada en las
							personas.
						</p>

						<p className="mt-6 font-title text-xl font-light leading-tight tracking-[-0.02em] text-text md:text-2xl">
							De una idea inicial a un producto que funciona.
						</p>
					</div>
				</div>

				<div
					className={`mt-16 h-px origin-left bg-border transition-transform duration-1200 ease-out md:mt-20 ${lineReveal}`}
				/>
			</div>
		</section>
	);
};

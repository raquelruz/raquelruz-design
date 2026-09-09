import { HiArrowUpRight, HiCodeBracket, HiPaintBrush, HiRocketLaunch } from "react-icons/hi2";

const services = [
	{
		number: "01",
		icon: HiCodeBracket,
		title: "Desarrollo",
		description: "Construyo aplicaciones web modernas, rápidas y responsive utilizando tecnologías actuales.",
		tags: ["React", "Node.js", "TypeScript"],
	},
	{
		number: "02",
		icon: HiPaintBrush,
		title: "UI / UX",
		description: "Diseño interfaces donde la estética, la usabilidad y la personalidad trabajan juntas.",
		tags: ["UI Design", "UX", "Responsive"],
	},
	{
		number: "03",
		icon: HiRocketLaunch,
		title: "Productos digitales",
		description:
			"Transformo ideas en productos completos, desde el concepto inicial hasta una experiencia funcional.",
		tags: ["Concept", "Design", "Development"],
	},
];

const getRevealDelay = (index) => {
	if (index === 0) {
		return "reveal-delay-100";
	}

	if (index === 1) {
		return "reveal-delay-200";
	}

	return "reveal-delay-300";
};

export const AboutServices = () => {
	return (
		<section className="bg-[#f7f5f1] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
					<div data-reveal className="reveal flex items-start gap-4">
						<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#99938c]">02</span>

						<span className="mt-1 h-px w-8 bg-[#d8d2ca]" />

						<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#99938c]">
							Lo que hago
						</span>
					</div>

					<div data-reveal className="reveal reveal-delay-100">
						<h2 className="text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.055em] text-[#292725]">
							Código con <span className="italic text-[#B2622D]">intención.</span>
						</h2>

						<p className="mt-8 text-base leading-relaxed text-[#6f6b67] md:text-lg">
							Una combinación de desarrollo, diseño y visión de producto para crear experiencias digitales
							completas.
						</p>
					</div>
				</div>

				<div className="mt-20 border-t border-[#d8d2ca]">
					{services.map((service, index) => {
						const Icon = service.icon;
						const revealDelay = getRevealDelay(index);

						return (
							<article
								key={service.number}
								data-reveal
								className={`reveal ${revealDelay} group border-b border-[#d8d2ca]`}
							>
								<div className="grid gap-8 py-10 md:grid-cols-[80px_70px_1fr_auto] md:items-center md:gap-10 md:py-14">
									<span className="font-mono text-xs text-[#99938c]">{service.number}</span>

									<div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8d2ca] text-[#292725] transition-all duration-500 group-hover:border-[#B2622D] group-hover:bg-[#B2622D] group-hover:text-white">
										<Icon size={20} />
									</div>

									<div>
										<h3 className="text-3xl font-light tracking-[-0.03em] text-[#292725] transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
											{service.title}
										</h3>

										<p className="mt-4 text-sm leading-relaxed text-[#77716b] md:text-base">
											{service.description}
										</p>

										<div className="mt-5 flex flex-wrap gap-2">
											{service.tags.map((tag) => {
												return (
													<span
														key={tag}
														className="rounded-full border border-[#d8d2ca] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#8a847d]"
													>
														{tag}
													</span>
												);
											})}
										</div>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

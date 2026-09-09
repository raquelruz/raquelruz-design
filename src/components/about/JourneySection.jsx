import { HiArrowUpRight } from "react-icons/hi2";

const journey = [
	{
		year: "2019",
		title: "Diseño & creatividad",
		description:
			"Comencé mi camino profesional en el mundo del diseño, trabajando con identidad visual, contenido digital y proyectos web.",
	},
	{
		year: "2023",
		title: "Descubrí el código",
		description:
			"Empecé a transformar mis diseños en experiencias reales y descubrí que programar era la herramienta que necesitaba para llevar mis ideas más lejos.",
	},
	{
		year: "2025",
		title: "Full Stack",
		description:
			"Amplié mis conocimientos hacia el backend, las APIs, las bases de datos y la arquitectura de aplicaciones completas.",
	},
	{
		year: "Ahora",
		title: "Construyendo lo que sigue",
		description:
			"Actualmente sigo creciendo como desarrolladora mientras creo productos digitales, experimento con nuevas ideas y sigo aprendiendo cada día.",
	},
];

export const JourneySection = () => {
	return (
		<section className="bg-white px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
					<div data-reveal className="reveal flex items-start gap-4">
						<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#99938c]">04</span>

						<span className="mt-1 h-px w-8 bg-[#d8d2ca]" />

						<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#99938c]">
							Mi camino
						</span>
					</div>

					<div data-reveal className="reveal reveal-delay-100">
						<h2 className="text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.055em] text-[#292725]">
							De la <span className="italic text-[#B2622D]">creatividad</span> al código.
						</h2>

						<p className="mt-8 text-base leading-relaxed text-[#6f6b67] md:text-lg">
							Una evolución que empezó en el diseño y que me llevó a descubrir en el desarrollo una nueva
							forma de crear.
						</p>
					</div>
				</div>

				<div className="relative mt-20">
					<div className="absolute bottom-0 left-1.75 top-0 w-px bg-border md:left-25.75" />

					<div className="space-y-0">
						{journey.map((item, index) => {
							let delay = "reveal-delay-100";

							if (index === 1) {
								delay = "reveal-delay-200";
							}

							if (index === 2) {
								delay = "reveal-delay-300";
							}

							if (index === 3) {
								delay = "reveal-delay-400";
							}

							return (
								<article key={item.year} data-reveal className={`reveal ${delay} group relative`}>
									<div className="grid gap-6 border-b border-border py-10 pl-12 md:grid-cols-[80px_24px_1fr] md:gap-8 md:py-14 md:pl-0">
										<div className="md:pt-1">
											<span className="font-mono text-xs text-[#99938c]">{item.year}</span>
										</div>

										<div className="absolute left-0 top-11.25 flex h-4 w-4 items-center justify-center rounded-full border border-[#d8d2ca] bg-white md:relative md:left-auto md:top-auto">
											<span className="h-1.5 w-1.5 rounded-full bg-[#B2622D] transition-transform duration-300 group-hover:scale-150" />
										</div>

										<div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-start lg:gap-12">
											<div>
												<h3 className="text-3xl font-light tracking-[-0.035em] text-[#292725] transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
													{item.title}
												</h3>
											</div>

											<p className="text-sm leading-[1.8] text-[#77716b] md:text-base">
												{item.description}
											</p>

											<div className="hidden lg:block">
												<HiArrowUpRight
													size={20}
													className="text-[#99938c] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B2622D]"
												/>
											</div>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>

				<div
					data-reveal
					className="reveal reveal-delay-400 mt-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
				>
					<p className="text-2xl font-light leading-relaxed tracking-[-0.02em] text-[#292725] md:text-3xl">
						Cada etapa me ha dado una perspectiva diferente sobre cómo{" "}
						<span className="italic text-[#B2622D]">crear mejores productos.</span>
					</p>

					<span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#99938c]">2019 — 2026</span>
				</div>
			</div>
		</section>
	);
};

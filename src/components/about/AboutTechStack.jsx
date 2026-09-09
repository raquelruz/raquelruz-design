import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";

const technologies = [
	{
		name: "React",
		icon: FaReact,
		category: "Frontend",
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		category: "Language",
	},
	{
		name: "Node.js",
		icon: FaNodeJs,
		category: "Backend",
	},
	{
		name: "Express",
		icon: SiExpress,
		category: "Backend",
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
		category: "Database",
	},
	{
		name: "Tailwind",
		icon: SiTailwindcss,
		category: "Styling",
	},
	{
		name: "Git",
		icon: FaGitAlt,
		category: "Tools",
	},
];

export const AboutTechStack = () => {
	return (
		<section className="relative overflow-hidden bg-[#292725] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16 lg:py-40">
			<div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-white/[0.04]" />
			<div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full border border-white/[0.04]" />

			<div className="relative mx-auto max-w-7xl">
				<div>
					<div data-reveal className="reveal flex items-start gap-4">
						<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">03</span>

						<span className="mt-1 h-px w-8 bg-white/15" />

						<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
							Mi stack
						</span>
					</div>

					<div data-reveal className="reveal reveal-delay-100 pt-12">
						<h2 className="text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.88] tracking-[-0.06em]">
							Las herramientas
							<br />
							que convierten <span className="italic text-[#B2622D]">ideas</span> en realidad.
						</h2>
					</div>
				</div>

				<div className="mt-24 md:mt-32">
					<div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
						{technologies.map((technology, index) => {
							const Icon = technology.icon;

							let delay = "reveal-delay-100";

							if (index === 1) {
								delay = "reveal-delay-200";
							}

							if (index === 2) {
								delay = "reveal-delay-300";
							}

							if (index >= 3) {
								delay = "reveal-delay-400";
							}

							return (
								<article
									key={technology.name}
									data-reveal
									className={`reveal ${delay} group relative overflow-hidden bg-[#292725] p-7 transition-colors duration-500 hover:bg-[#322f2c] md:p-10`}
								>
									<span className="absolute left-0 top-0 h-px w-0 bg-[#B2622D] transition-all duration-500 group-hover:w-full" />

									<div className="flex items-start justify-between">
										<span className="font-mono text-[10px] text-white/20">0{index + 1}</span>

										<span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20 transition-colors duration-300 group-hover:text-[#B2622D]">
											{technology.category}
										</span>
									</div>

									<div className="mt-16 flex items-end justify-between gap-6">
										<div>
											<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-500 group-hover:border-[#B2622D] group-hover:bg-[#B2622D] group-hover:text-white">
												<Icon size={21} />
											</div>

											<h3 className="text-4xl font-light tracking-[-0.04em] text-white transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
												{technology.name}
											</h3>
										</div>

										<span className="mb-1 text-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#B2622D]">
											↗
										</span>
									</div>
								</article>
							);
						})}
					</div>
				</div>

				<div
					data-reveal
					className="reveal reveal-delay-400 mt-16 flex flex-col gap-8 border-t border-white/10 pt-8 md:mt-20 md:flex-row md:items-end md:justify-between"
				>
					<div>
						<p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
							Más allá del stack
						</p>

						<p className="mt-4 text-xl font-light leading-relaxed text-white/55 md:text-2xl">
							No se trata solo de conocer herramientas.
							<br />
							Se trata de saber <span className="text-white">cuándo y por qué utilizarlas.</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

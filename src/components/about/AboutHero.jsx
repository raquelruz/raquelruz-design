import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const AboutHero = () => {
	return (
		<section className="bg-background-soft px-6 pb-24 pt-20 md:px-10 md:pb-32">
			<div className="mx-auto grid max-w-7xl items-end gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
				<div data-reveal className="reveal">
					<div className="mb-8 flex items-center gap-4">
						<span className="h-px w-10 bg-[#B2622D]" />

						<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
							Sobre mí
						</span>
					</div>

					<h1 className="max-w-4xl text-[clamp(4rem,9vw,8.5rem)] font-light leading-[0.88] tracking-[-0.06em] text-[#292725]">
						Developer, designer
						<br />
						<span className="italic text-[#B2622D]">& problem solver</span>
					</h1>

					<p
						data-reveal
						className="reveal reveal-delay-200 mt-10 text-base leading-relaxed text-[#6f6b67] md:text-lg"
					>
						Soy Raquel, desarrolladora Full Stack con experiencia en diseño. Me gusta combinar código,
						creatividad y diseño para construir productos digitales que no solo funcionen bien, sino que
						también se disfruten.
					</p>

					<div data-reveal className="reveal reveal-delay-300 mt-10 flex flex-wrap items-center gap-6">
						<Link
							to="/contact"
							className="group inline-flex items-center gap-3 border-b border-[#292725] pb-2 text-sm font-medium text-[#292725]"
						>
							Hablemos
							<HiArrowUpRight
								size={17}
								className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
							/>
						</Link>

						<span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#99938c]">
							Full Stack Developer
						</span>
					</div>
				</div>

				<div data-reveal className="reveal reveal-delay-300 lg:pb-2">
					<div className="group relative overflow-hidden rounded-4xl bg-[#292725] p-7 text-white shadow-2xl transition-transform duration-500 hover:-translate-y-2 md:p-9">
						<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />
						<div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full border border-white/10" />

						<div className="flex items-center justify-between">
							<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
								Career status
							</span>

							<span className="font-mono text-[10px] text-white/30">2026</span>
						</div>

						<div className="relative mt-20">
							<div className="flex items-center gap-3">
								<span className="relative flex h-2.5 w-2.5">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B2622D] opacity-50" />

									<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B2622D]" />
								</span>

								<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
									Open to work
								</span>
							</div>

							<h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.04em] text-white md:text-5xl">
								Abierta a nuevas <span className="italic text-[#B2622D]">oportunidades.</span>
							</h2>

							<p className="mt-6 text-sm leading-relaxed text-white/50">
								Busco incorporarme a un equipo donde pueda seguir creciendo como desarrolladora y
								aportar mi experiencia en diseño.
							</p>
						</div>

						<div className="relative mt-20 border-t border-white/10 pt-5">
							<div className="flex items-end justify-between gap-6">
								<div>
									<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
										Looking for
									</p>

									<p className="mt-2 text-sm text-white/80">Full Stack · Frontend</p>
								</div>

								<Link
									to="/contact"
									aria-label="Ir a contacto"
									className="group/arrow flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 hover:bg-white hover:text-[#292725]"
								>
									<HiArrowUpRight
										size={19}
										className="transition-transform duration-300 group-hover/arrow:-translate-y-0.5 group-hover/arrow:translate-x-0.5"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

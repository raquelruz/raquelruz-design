import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useInView } from "../hooks/useInView";

const socialLinks = [
	{
		label: "GitHub",
		href: "https://github.com/raquelruz",
		icon: FaGithub,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/raquel-ruiz-lopez",
		icon: FaLinkedin,
	},
];

export const ContactSection = () => {
	const [ref, isInView] = useInView();

	let revealClass = "translate-y-8 opacity-0";

	if (isInView) {
		revealClass = "translate-y-0 opacity-100";
	}

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-secondary px-5 py-24 font-landing text-background md:py-32"
		>
			<div className="relative mx-auto max-w-7xl">
				<div className={`transition-all duration-1000 ease-out ${revealClass}`}>
					<div className="flex items-center justify-between border-b border-background/15 pb-5">
						<div className="flex items-center gap-3">
							<span className="relative flex h-2.5 w-2.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />

								<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
							</span>

							<span className="text-[10px] font-medium uppercase tracking-[0.25em] text-background/60 md:text-xs">
								Disponible para nuevos proyectos
							</span>
						</div>
					</div>

					<div className="py-20 md:py-28">
						<p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-background/40 md:text-xs">
							No sé todavía qué vamos a hacer.
						</p>

						<div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
							<h2 className="max-w-5xl font-title text-[4.2rem] font-light leading-[0.86] tracking-[-0.055em] sm:text-6xl md:text-8xl lg:text-[9rem]">
								Y eso es precisamente
								<br />
								<span className="text-background/35">lo divertido.</span>
							</h2>

							<Link
								to="/contact"
								aria-label="Ir a contacto"
								className="group/cta flex w-fit items-center gap-4 border-b border-background/30 pb-3 text-sm uppercase tracking-[0.2em] text-background/70 transition-all duration-500 hover:border-background hover:text-background"
							>
								<span>Ir a contacto</span>

								<span className="flex h-9 w-9 items-center justify-center rounded-full border border-background/25 transition-all duration-500 group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1 group-hover/cta:bg-background group-hover/cta:text-secondary">
									<HiArrowUpRight
										size={17}
										className="transition-transform duration-500 group-hover/cta:rotate-45"
									/>
								</span>
							</Link>
						</div>
					</div>

					<div className="grid gap-12 border-t border-background/15 pt-8 md:grid-cols-3 md:gap-8">
						<div>
							<span className="mb-4 block text-[9px] uppercase tracking-[0.25em] text-background/30">
								Sobre mi trabajo
							</span>

							<p className="text-sm leading-relaxed text-background/55">
								Diseño y desarrollo experiencias digitales donde la estética, la funcionalidad y el
								código trabajan juntos.
							</p>
						</div>

						<div>
							<span className="mb-4 block text-[12px] uppercase tracking-[0.25em] text-background/30">
								Escríbeme
							</span>

							<a
								href="mailto:raquelruizlopezcepero@gmail.com"
								className="group/email relative inline-block text-sm text-background/75 transition-colors hover:text-background"
							>
								raquelruizlopezcepero@gmail.com
								<span className="absolute -bottom-1 left-0 h-px w-0 bg-background transition-all duration-500 group-hover/email:w-full" />
							</a>
						</div>

						<div className="md:justify-self-end">
							<span className="mb-4 block text-[12px] uppercase tracking-[0.25em] text-background/30">
								Encuéntrame
							</span>

							<div className="flex flex-wrap items-center gap-5">
								{socialLinks.map(({ label, href, icon: Icon }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noreferrer"
										aria-label={label}
										className="group/social flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-background/55 transition-colors hover:text-background"
									>
										<Icon
											size={14}
											className="transition-transform duration-300 group-hover/social:-translate-y-0.5"
										/>

										<span>{label}</span>

										<HiArrowUpRight
											size={11}
											className="transition-transform duration-300 group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5"
										/>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

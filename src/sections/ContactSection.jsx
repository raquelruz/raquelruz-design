import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const socialLinks = [
	{ label: "GitHub", href: "https://github.com/raquelruz", icon: FaGithub },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/raquel-ruiz-lopez", icon: FaLinkedin },
];

export const ContactSection = () => {
	const [ref, isInView] = useInView();

	let revealClass = "translate-y-10 opacity-0";
	if (isInView) {
		revealClass = "translate-y-0 opacity-100";
	}

	return (
		<section
			ref={ref}
			className="max-w-full relative overflow-hidden bg-secondary px-5 py-24 font-landing text-background"
		>
			<div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-background/10 md:h-128 md:w-128" />

			<div className="relative mx-auto max-w-7xl">
				<div className={`transition-all duration-1000 ease-out ${revealClass}`}>
					<div className="flex items-center justify-between border-b border-background/15 pb-5">
						<div className="flex items-center gap-3">
							<span className="relative flex h-2.5 w-2.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
								<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
							</span>

							<span className="text-[10px] font-medium uppercase tracking-[0.25em] text-background/60 md:text-xs">
								Disponible para proyectos
							</span>
						</div>

						<span className="hidden text-xs tracking-widest text-background/30 md:block">2026 — 2027</span>
					</div>

					<div className="grid gap-16 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-24">
						<div>
							<p className="mb-8 text-xs uppercase tracking-[0.25em] text-background/40">
								¿Tienes una idea?
							</p>
							<h2 className="max-w-5xl font-title text-[4rem] font-light leading-[0.9] tracking-tight sm:text-6xl md:text-8xl lg:text-[9rem]">
								Hagamos <br /> <span className="text-background/35">algo increíble.</span>
							</h2>
						</div>

						<Link
							to="/contact"
							aria-label="Ir a contacto"
							className="group/cta relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-background/25 transition-all duration-500 hover:scale-110 hover:border-background hover:bg-background md:h-36 md:w-36"
						>
							<span className="absolute inset-2 rounded-full border border-background/10 transition-all duration-500 group-hover/cta:scale-90 group-hover/cta:opacity-0" />
							<HiArrowUpRight
								size={34}
								className="relative text-background transition-all duration-500 group-hover/cta:rotate-45 group-hover/cta:text-secondary"
							/>
						</Link>
					</div>

					<div className="grid gap-10 border-t border-background/15 pt-8 md:grid-cols-3 md:items-end">
						<p className="text-sm leading-relaxed text-background/55 md:col-span-1">
							Diseño y desarrollo experiencias digitales pensadas para conectar ideas, personas y
							tecnología.
						</p>

						<div className="md:col-span-1 md:justify-self-center">
							<span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-background/30">
								Escríbeme
							</span>

							
							<a	href="mailto:raquelruizlopezcepero@gmail.com"
								className="group/email relative inline-block text-sm tracking-wide text-background/75 transition-colors hover:text-background"
							>
								raquelruizlopezcepero@gmail.com
								<span className="absolute -bottom-1 left-0 h-px w-0 bg-background transition-all duration-500 group-hover/email:w-full" />
							</a>
						</div>

						<div className="md:justify-self-end">
							<span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-background/30">
								Encuéntrame
							</span>
							<div className="flex items-center gap-6">
								{socialLinks.map(({ label, href, icon: Icon }) => (
									
									<a	key={label}
										href={href}
										target="_blank"
										rel="noreferrer"
										aria-label={label}
										className="group/social flex items-center gap-2 text-xs uppercase tracking-widest text-background/55 transition-colors hover:text-background"
									>
										<Icon
											size={15}
											className="transition-transform duration-300 group-hover/social:-translate-y-0.5"
										/>
										<span>{label}</span>
										<HiArrowUpRight
											size={12}
											className="transition-transform duration-300 group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5"
										/>
									</a>
								))}
							</div>
						</div>
					</div>

					<div className="mt-28 flex flex-col justify-center gap-3 text-[9px] uppercase tracking-[0.25em] text-background sm:flex-row">
						<span>Raquel Ruz — Full Stack Developer | Made with ♥ & code</span>
					</div>
				</div>
			</div>
		</section>
	);
};
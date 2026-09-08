import { useEffect, useRef } from "react";
import { HiArrowUpRight, HiCodeBracket, HiPaintBrush, HiRocketLaunch } from "react-icons/hi2";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const technologies = [
	{
		name: "React",
		icon: FaReact,
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
	},
	{
		name: "Node.js",
		icon: FaNodeJs,
	},
	{
		name: "Express",
		icon: SiExpress,
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
	},
	{
		name: "Tailwind",
		icon: SiTailwindcss,
	},
	{
		name: "Git",
		icon: FaGitAlt,
	},
];

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

export const AboutPage = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		const elements = sectionRef.current?.querySelectorAll("[data-reveal]");

		if (!elements) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.15,
			},
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, []);

	return (
		<main ref={sectionRef} className="overflow-hidden bg-[#f7f5f1] text-[#252525]">
			<section className="relative min-h-[90vh] px-6 pb-24 pt-32 md:px-12 lg:px-20">
				<div className="pointer-events-none absolute -right-40 top-20 h-125 w-125 rounded-full bg-[#e8ded4] opacity-60 blur-3xl" />

				<div className="mx-auto max-w-7xl">
					<div
						data-reveal
						className="reveal mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#777]"
					>
						<span className="h-px w-10 bg-[#777]" />
						Sobre mí
					</div>

					<div className="grid items-end gap-16 lg:grid-cols-[1.2fr_0.8fr]">
						<div>
							<h1
								data-reveal
								className="reveal text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.07em]"
							>
								Creo experiencias
								<span className="relative inline-block italic text-secondary">digitales</span>
							</h1>

							<p
								data-reveal
								className="reveal reveal-delay-200 mt-12 text-lg leading-relaxed text-[#666] md:text-xl"
							>
								Soy Raquel, desarrolladora Full Stack con experiencia en diseño. Me gusta combinar{" "}
								<span className="font-medium text-[#252525]">código, creatividad y diseño</span> para
								construir productos digitales que no solo funcionen bien, sino que también se disfruten.
							</p>
						</div>

						<div data-reveal className="reveal reveal-delay-300 group relative">
							<div className="relative overflow-hidden rounded-4xl bg-[#292725] p-7 text-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
								<div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />

								<div className="mb-16 flex items-center justify-between">
									<span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
										raquel.dev
									</span>

									<span className="flex items-center gap-2 text-xs text-white/60">
										<span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
										disponible
									</span>
								</div>

								<p className="text-sm text-white/40">01 / 04</p>

								<h2 className="mt-3 text-4xl font-medium tracking-tight">
									Raquel
									<br />
									Ruiz
								</h2>

								<p className="mt-6 text-sm leading-relaxed text-white/60">
									Desarrolladora Full Stack
									<br />+ Diseñadora Digital
								</p>

								<div className="mt-16 flex items-end justify-between">
									<div>
										<p className="text-xs uppercase tracking-widest text-white/30">desde</p>

										<p className="mt-1 text-sm">España</p>
									</div>

									<HiArrowUpRight
										className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
										size={28}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-y border-[#dedbd5] bg-white px-6 py-24 md:px-12 lg:px-20">
				<div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
					<div data-reveal className="reveal">
						<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#999]">
							01 — Quién soy
						</span>
					</div>

					<div data-reveal className="reveal reveal-delay-200">
						<p className="max-w-4xl text-3xl font-light leading-tight tracking-tight md:text-5xl">
							No quiero limitarme a escribir código.{" "}
							<span className="text-secondary">
								Quiero crear cosas que las personas disfruten utilizando.
							</span>
						</p>

						<div className="mt-12 grid gap-8 text-base leading-relaxed text-[#666] md:grid-cols-2">
							<p>
								Mi camino comenzó en el mundo del diseño. Allí aprendí a prestar atención a los pequeños
								detalles: la composición, la identidad visual, la experiencia y la forma en la que una
								persona percibe un producto.
							</p>

							<p>
								Después llegó el desarrollo y descubrí que podía unir ambas partes. Hoy trabajo en todo
								el proceso de creación de un producto digital: desde la interfaz y las interacciones
								hasta las APIs, las bases de datos y la lógica que hace que todo funcione.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-28 md:px-12 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div data-reveal className="reveal mb-16">
						<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#999]">
							02 — Lo que hago
						</span>

						<h2 className="mt-5 text-4xl font-light tracking-tight md:text-7xl">
							Código con <span className="italic text-secondary">intención.</span>
						</h2>
					</div>

					<div className="grid border-t border-[#dcd8d1] md:grid-cols-3">
						{[
							{
								number: "01",
								icon: HiCodeBracket,
								title: "Desarrollo",
								text: "Construyo aplicaciones web modernas, rápidas y responsive utilizando tecnologías actuales.",
							},
							{
								number: "02",
								icon: HiPaintBrush,
								title: "UI / UX",
								text: "Diseño interfaces donde la estética, la usabilidad y la personalidad trabajan juntas.",
							},
							{
								number: "03",
								icon: HiRocketLaunch,
								title: "Productos digitales",
								text: "Transformo ideas en productos completos, desde el concepto inicial hasta una experiencia funcional.",
							},
						].map((item, index) => {
							const Icon = item.icon;

							return (
								<article
									key={item.number}
									data-reveal
									className={`reveal group border-b border-[#dcd8d1] p-8 transition-all duration-500 hover:bg-[#292725] hover:text-white md:border-b-0 md:border-r ${
										index === 2 ? "md:border-r-0" : ""
									}`}
								>
									<div className="flex items-center justify-between">
										<span className="font-mono text-xs opacity-40">{item.number}</span>

										<Icon
											size={28}
											strokeWidth={1.5}
											className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
										/>
									</div>

									<h3 className="mt-24 text-2xl">{item.title}</h3>

									<p className="mt-5 text-sm leading-relaxed opacity-60">{item.text}</p>

									<div className="mt-10 h-[1px] w-0 bg-current transition-all duration-500 group-hover:w-full" />
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="bg-[#292725] px-6 py-28 text-white md:px-12 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
						<div data-reveal className="reveal">
							<span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
								03 — Mi stack
							</span>

							<h2 className="mt-5 text-4xl font-light tracking-tight md:text-7xl">
								Las herramientas
								<br />
								con las que
								<br />
								<span className="italic text-secondary">construyo.</span>
							</h2>
						</div>

						<div
							data-reveal
							className="reveal reveal-delay-200 grid grid-cols-2 border-l border-white/10 sm:grid-cols-3"
						>
							{technologies.map(({ name, icon: Icon }) => (
								<div
									key={name}
									className="group flex min-h-32 items-center gap-4 border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/5"
								>
									<Icon
										size={28}
										className="text-white/50 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
									/>

									<span className="text-sm text-white/70 group-hover:text-white">{name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#f7f5f1] px-6 py-28 md:px-12 lg:px-20">
				<div className="mx-auto max-w-7xl">
					<div data-reveal className="reveal">
						<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#999]">
							04 — Mi camino
						</span>

						<h2 className="mt-5 text-4xl font-light tracking-tight md:text-7xl">
							Diseñando, aprendiendo, {" "}
							<span className="italic text-secondary">construyendo.</span>
						</h2>
					</div>

					<div className="mt-20">
						{journey.map((item) => (
							<div
								key={item.year}
								data-reveal
								className="reveal group grid gap-6 border-t border-[#dcd8d1] py-10 md:grid-cols-[120px_1fr_1.5fr] md:items-start"
							>
								<span className="font-mono text-sm text-[#999]">{item.year}</span>

								<h3 className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
									{item.title}
								</h3>

								<p className="text-sm leading-relaxed text-[#777]">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="border-y border-[#dedbd5] bg-white px-6 py-28 md:px-12 lg:px-20">
				<div data-reveal className="reveal mx-auto max-w-5xl text-center">
					<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#999]">05 — Mi filosofía</span>

					<blockquote className="mt-10 text-4xl font-light leading-tight tracking-tight md:text-6xl">
						"El código hace que una idea {" "}
						<span className="italic text-secondary">funcione.</span>
						<br />
						El diseño hace que quieras {" "}
						<span className="italic text-secondary">utilizarla."</span>
					</blockquote>
				</div>
			</section>
		</main>
	);
};

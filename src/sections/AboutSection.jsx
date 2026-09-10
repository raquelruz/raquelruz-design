import { useInView } from "../hooks/useInView";

const QUICK_FACTS = [
	{
		value: "+3",
		label: "Años de experiencia",
	},
	{
		value: "MERN",
		label: "Stack principal",
	},
	{
		value: "React",
		label: "Frontend",
	},
	{
		value: "Node.js",
		label: "Backend",
	},
];

export const AboutSection = () => {
	const [aboutRef, isAboutVisible] = useInView({
		threshold: 0.15,
	});

	let reveal = "translate-y-10 opacity-0";
	let numberReveal = "-translate-y-10 opacity-0";
	let lineReveal = "scale-x-0";

	if (isAboutVisible) {
		reveal = "translate-y-0 opacity-100";
		numberReveal = "translate-y-0 opacity-100";
		lineReveal = "scale-x-100";
	}

	return (
		<section
			ref={aboutRef}
			className="relative overflow-hidden border-t border-border bg-background font-landing text-text"
		>
			<div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-border" />

			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-32 lg:px-16">
				<div className="mt-10 grid gap-14 md:mt-14 md:grid-cols-12 md:gap-8">
					<div className="md:col-span-7">
						<h2
							className={`font-title text-5xl font-light leading-[0.9] tracking-[-0.055em] transition-all duration-1100 ease-out md:text-7xl lg:text-[5.5rem] ${reveal}`}
						>
							Me gusta entender
							<br />
							cómo funcionan las cosas.
							<br />
							<span className="text-secondary"> Y después mejorarlas.</span>
						</h2>
					</div>

					<div
						className={`flex items-end md:col-span-4 md:col-start-9 transition-all delay-200 duration-900 ${reveal}`}
					>
						<p className="text-base leading-7 text-text-muted md:text-lg">
							Mi experiencia en diseño digital me permite combinar desarrollo y diseño para construir
							productos donde la experiencia de usuario y la parte técnica trabajan juntas.
							<br />
							<br />
							Me interesa crear soluciones que sean funcionales, claras y visualmente cuidadas, prestando
							atención tanto a la estructura como a los pequeños detalles que hacen que una experiencia se
							sienta bien.
						</p>
					</div>
				</div>

				<div
					className={`mt-20 h-px origin-left bg-border transition-transform duration-1200 ease-out md:mt-28 ${lineReveal}`}
				/>

				<div className="grid grid-cols-2 md:grid-cols-4">
					{QUICK_FACTS.map((fact, index) => {
						let factReveal = "translate-y-6 opacity-0";

						if (isAboutVisible) {
							factReveal = "translate-y-0 opacity-100";
						}

						return (
							<div
								key={fact.label}
								style={{
									transitionDelay: `${index * 100}ms`,
								}}
								className={`group border-b border-border px-0 py-8 transition-all duration-700 md:border-b-0 md:px-6 md:py-10 ${
									index % 2 === 0 ? "border-r md:border-r" : "md:border-r"
								} ${factReveal}`}
							>
								<p className="font-landing text-4xl font-light text-center leading-none tracking-[-0.04em] text-secondary transition-transform duration-500 group-hover:-translate-y-1 md:text-5xl">
									{fact.value}
								</p>

								<span className="mt-4 block font-mono text-[12px] text-center uppercase leading-5 tracking-[0.15em] text-text-muted">
									{fact.label}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

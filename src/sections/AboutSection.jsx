import { useInView } from "../hooks/useInView";

const quickFacts = [
	{ value: "+3", label: "Años de experiencia" },
	{ value: "MERN", label: "Stack principal" },
	{ value: "React", label: "Frontend" },
	{ value: "Node.js", label: "Backend" },
];

export const AboutSection = () => {
	const [ref, isInView] = useInView();

	let revealClass = "translate-y-8 opacity-0";
	if (isInView) {
		revealClass = "translate-y-0 opacity-100";
	}

	return (
		<div ref={ref} className={`transition-all duration-1000 ease-out ${revealClass}`}>
			<span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
				Sobre mí
			</span>

			<div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
				<h2 className="md:col-span-7 font-title text-text text-3xl leading-tight md:text-5xl">
					Developer, designer <span className="text-secondary/40">& problem solver.</span>
				</h2>

				<p className="md:col-span-5 text-lg text-text-muted leading-relaxed">
					Mi experiencia en diseño digital me permite combinar desarrollo y diseño para construir productos
					donde la experiencia de usuario y la parte técnica trabajan juntas.
				</p>
			</div>

			<div className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
				{quickFacts.map((fact) => (
					<div key={fact.label}>
						<p className="font-title italic text-secondary text-4xl leading-none md:text-5xl">
							{fact.value}
						</p>
						<span className="mt-3 block text-sm text-text-muted">{fact.label}</span>
					</div>
				))}
			</div>
		</div>
	);
};

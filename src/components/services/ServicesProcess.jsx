import { useInView } from "../../hooks/useInView";

const PROCESS = [
	{
		step: "01",
		label: "Descubrir",
		detail: "Entender el problema, los objetivos y lo que realmente necesita el proyecto.",
	},
	{
		step: "02",
		label: "Diseñar",
		detail: "Definir estructura, experiencia y dirección visual antes de escribir código.",
	},
	{
		step: "03",
		label: "Construir",
		detail: "Convertir la idea en un producto funcional, escalable y mantenible.",
	},
	{
		step: "04",
		label: "Pulir",
		detail: "Optimizar, revisar y cuidar cada detalle antes de dar el proyecto por terminado.",
	},
];

export const ServicesProcess = () => {
	const [processRef, isProcessVisible] = useInView({
		threshold: 0.1,
	});

	let reveal = "translate-y-8 opacity-0";
	let numberReveal = "-translate-y-10 opacity-0";

	if (isProcessVisible) {
		reveal = "translate-y-0 opacity-100";
		numberReveal = "translate-y-0 opacity-100";
	}

	return (
		<section
			ref={processRef}
			className="relative overflow-hidden border-t border-border bg-background font-landing text-text"
		>
			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-32 lg:px-16">
				<div className="grid gap-16 md:grid-cols-12 md:gap-8">
					<div className="md:col-span-4">
						<div className={`transition-all duration-700 ${reveal}`}>
							<div className="flex items-center gap-4">
								<span className="font-mono text-[12px] tracking-[0.2em] text-secondary">01</span>

								<span className="h-px w-10 bg-secondary/50" />

								<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text-muted">
									Proceso
								</span>
							</div>

							<h2 className="mt-8 font-title text-5xl font-light leading-[0.88] tracking-[-0.05em] md:text-6xl">
								Una forma de trabajar.
							</h2>

							<p className="mt-7 text-sm leading-7 text-text-muted md:text-base">
								Cada proyecto necesita su propio camino, pero siempre parto de una misma idea: entender
								antes de construir.
							</p>
						</div>
					</div>

					<div className="md:col-span-8">
						<div className="border-t border-border">
							{PROCESS.map((item, index) => {
								let itemReveal = "translate-y-6 opacity-0";

								if (isProcessVisible) {
									itemReveal = "translate-y-0 opacity-100";
								}

								return (
									<div
										key={item.step}
										style={{
											transitionDelay: `${index * 100}ms`,
										}}
										className={`group grid gap-5 border-b border-border py-8 transition-all duration-700 md:grid-cols-12 md:items-start md:gap-8 ${itemReveal}`}
									>
										<span className="font-mono text-[10px] tracking-[0.15em] text-secondary md:col-span-2">
											{item.step}
										</span>

										<h3 className="font-title text-3xl font-light tracking-[-0.04em] transition-colors duration-300 group-hover:text-secondary md:col-span-3 md:text-4xl">
											{item.label}
										</h3>

										<p className="text-sm leading-6 text-text-muted md:col-span-7 md:text-base">
											{item.detail}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

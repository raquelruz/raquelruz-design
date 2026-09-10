import { useInView } from "../../hooks/useInView";

export const ProjectDetailFeatures = ({ project }) => {
	const { keyFeatures = [] } = project;

	if (keyFeatures.length === 0) {
		return null;
	}

	const [featuresRef, areFeaturesVisible] = useInView({
		threshold: 0.15,
	});

	let headingReveal = "translate-y-8 opacity-0";

	if (areFeaturesVisible) {
		headingReveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={featuresRef} className="relative overflow-hidden bg-[#eee7df]">
			<div
				className={`pointer-events-none absolute -right-8 -top-16 select-none font-title text-[22rem] font-light leading-none tracking-[-0.08em] text-[#292725]/2.5 transition-all duration-1600 ease-out md:text-[30rem] ${
					areFeaturesVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
				}`}
			>
				03
			</div>

			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-36 lg:px-16">
				<div className="grid gap-16 md:grid-cols-12 md:gap-8">
					<div className="md:col-span-4">
						<div className="sticky top-10">
							<div className={`flex items-center gap-4 transition-all duration-700 ${headingReveal}`}>
								<span className="font-mono text-[12px] tracking-[0.2em] text-secondary">03</span>

								<span className="h-px w-10 bg-secondary/50" />

								<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#918981]">
									Funcionalidades
								</span>
							</div>

							<h2
								className={`mt-8 font-title text-5xl font-light leading-[0.86] tracking-[-0.05em] transition-all duration-900 ease-out md:text-7xl lg:text-8xl ${headingReveal}`}
							>
								Lo que construí.
							</h2>

							<p
								className={`mt-8 text-sm leading-7 text-[#918981] transition-all delay-200 duration-700 ${headingReveal}`}
							>
								Las principales funcionalidades que dan forma a la experiencia del proyecto.
							</p>
						</div>
					</div>

					<div className="md:col-span-7 md:col-start-6">
						<div className="border-t border-[#292725]/15">
							{keyFeatures.map((feature, index) => {
								let featureReveal = "translate-y-10 opacity-0";

								if (areFeaturesVisible) {
									featureReveal = "translate-y-0 opacity-100";
								}

								return (
									<article
										key={feature}
										className={`group relative border-b border-[#292725]/15 transition-all duration-900 ease-out ${featureReveal}`}
										style={{
											transitionDelay: `${250 + index * 120}ms`,
										}}
									>
										<div className="flex items-center gap-6 py-8 md:py-10">
											<span className="w-8 shrink-0 font-mono text-[10px] tracking-[0.15em] text-[#aaa198] transition-colors duration-300 group-hover:text-secondary">
												{String(index + 1).padStart(2, "0")}
											</span>

											<p className="flex-1 font-title text-2xl font-light leading-tight tracking-[-0.025em] text-[#514a43] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
												{feature}
											</p>

											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#292725]/10 transition-all duration-500 group-hover:border-secondary group-hover:bg-secondary">
												<span className="h-1.5 w-1.5 rounded-full bg-secondary transition-all duration-500 group-hover:scale-150 group-hover:bg-white" />
											</div>
										</div>

										<div className="absolute bottom-0 left-0 h-px w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
									</article>
								);
							})}
						</div>

						<div
							className={`mt-8 flex items-center justify-between transition-all delay-800 duration-700 ${headingReveal}`}
						>
							<span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#918981]">
								Funcionalidades
							</span>

							<span className="font-mono text-[9px] tracking-[0.15em] text-[#918981]">
								{String(keyFeatures.length).padStart(2, "0")} elementos
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

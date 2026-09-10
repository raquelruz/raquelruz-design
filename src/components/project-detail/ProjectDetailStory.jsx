import { useInView } from "../../hooks/useInView";

export const ProjectDetailStory = ({ project }) => {
	const { id, story = [] } = project;

	const hasStory = story.length > 0;

	if (!hasStory) {
		return null;
	}

	const [storyRef, isStoryVisible] = useInView({
		threshold: 0.15,
	});

	let headingReveal = "translate-y-8 opacity-0";
	let introReveal = "translate-y-6 opacity-0";

	if (isStoryVisible) {
		headingReveal = "translate-y-0 opacity-100";
		introReveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={storyRef} className="relative overflow-hidden bg-[#292725] text-[#f7f5f1]">
			<div
				className={`pointer-events-none absolute -left-12 -top-20 select-none font-title text-[28rem] font-light leading-none tracking-[-0.08em] text-white/2.5 transition-all duration-1600 ease-out md:-right-8 md:-top-32 md:text-[38rem] ${
					isStoryVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
				}`}
			>
				02
			</div>

			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-36 lg:px-16">
				<div className="grid gap-16 md:grid-cols-12 md:gap-8">
					<div className="md:col-span-4">
						<div className="sticky top-10">
							<div className={`flex items-center gap-4 transition-all duration-700 ${headingReveal}`}>
								<span className="font-mono text-[12px] tracking-[0.2em] text-[#c18b68]">02</span>

								<span className="h-px w-10 bg-[#c18b68]/50" />

								<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#77716b]">
									Proceso
								</span>
							</div>

							<h2
								className={`mt-8 font-title text-5xl font-light leading-[0.86] tracking-[-0.05em] transition-all duration-900 ease-out md:text-7xl lg:text-8xl ${headingReveal}`}
							>
								Cómo se construyó.
							</h2>

							<p
								className={`mt-8  text-sm leading-7 text-[#77716b] transition-all delay-200 duration-700 ${introReveal}`}
							>
								Del concepto inicial a una experiencia funcional y pensada para usuarios reales.
							</p>

							<div
								className={`mt-14 hidden border-l border-white/10 pl-5 transition-all delay-300 duration-700 md:block ${introReveal}`}
							>
								<span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#77716b]">
									Metodología
								</span>

								<p className="mt-2 text-xs leading-5 text-[#a49d96]">
									Concepto · Diseño · Desarrollo · Iteración
								</p>
							</div>
						</div>
					</div>

					<div className="md:col-span-7 md:col-start-6">
						<div className="divide-y divide-white/8">
							{story.map((paragraph, index) => {
								let paragraphReveal = "translate-y-10 opacity-0";

								if (isStoryVisible) {
									paragraphReveal = "translate-y-0 opacity-100";
								}

								return (
									<article
										key={`${id}-${index}`}
										className={`group grid gap-6 py-10 transition-all duration-900 ease-out md:grid-cols-[70px_1fr] ${
											index === 0 ? "pt-0" : ""
										} ${paragraphReveal}`}
										style={{
											transitionDelay: `${300 + index * 150}ms`,
										}}
									>
										<div>
											<span className="font-mono text-[10px] tracking-[0.15em] text-[#77716b] transition-colors duration-300 group-hover:text-[#c18b68]">
												{String(index + 1).padStart(2, "0")}
											</span>
										</div>

										<p className="text-base leading-[1.9] text-[#c7c1bb] transition-colors duration-500 group-hover:text-white md:text-lg">
											{paragraph}
										</p>
									</article>
								);
							})}
						</div>

						<div
							className={`mt-12 flex items-center gap-4 transition-all delay-900 duration-700 ${introReveal}`}
						>
							<span className="h-1.5 w-1.5 rounded-full bg-[#c18b68]" />

							<span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#77716b]">
								Fin del proceso
							</span>

							<span className="h-px flex-1 bg-white/8" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

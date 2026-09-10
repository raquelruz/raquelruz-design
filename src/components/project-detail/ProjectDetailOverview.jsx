import { useInView } from "../../hooks/useInView";

export const ProjectDetailOverview = ({ project }) => {
	const { description, objective, role, year, services = [] } = project;

	const [overviewRef, isOverviewVisible] = useInView({
		threshold: 0.15,
	});

	let headingReveal = "translate-y-8 opacity-0";
	let contentReveal = "translate-y-6 opacity-0";

	if (isOverviewVisible) {
		headingReveal = "translate-y-0 opacity-100";
		contentReveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={overviewRef} className="relative overflow-hidden">
			<div
				className={`pointer-events-none absolute -right-2  select-none font-title text-[22rem] font-light leading-none tracking-[-0.08em] text-[#292725]/2.5 transition-all duration-1600 ease-out md:text-[30rem] ${
					isOverviewVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
				}`}
			>
				01
			</div>

			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-36 lg:px-16">
				<div className="grid gap-16 md:grid-cols-12 md:gap-8">
					<div className="md:col-span-3">
						<div className="sticky top-10">
							<div className={`flex items-center gap-4 transition-all duration-700 ${headingReveal}`}>
								<span className="font-mono text-[12px] tracking-[0.2em] text-secondary">01</span>

								<span className="h-px w-10 bg-secondary/50" />
							</div>

							<p
								className={`mt-4 font-mono text-[12px] uppercase tracking-[0.2em] text-[#918981] transition-all delay-100 duration-700 ${headingReveal}`}
							>
								Sobre el proyecto
							</p>
						</div>
					</div>

					<div className="md:col-span-8 md:col-start-5">
						<div className={`transition-all duration-900 ease-out ${headingReveal}`}>
							<p className="font-title text-4xl font-light leading-[1.08] tracking-[-0.04em]">
								{description}
							</p>
						</div>

						{objective && (
							<div
								className={`mt-16 border-t border-border pt-8 transition-all delay-200 duration-700 ${contentReveal}`}
							>
								<div className="grid gap-6 md:grid-cols-3">
									<div className="flex items-start gap-3">
										<span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />

										<span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#918981]">
											Objetivo
										</span>
									</div>

									<p className="text-sm leading-7 text-[#716b64] md:col-span-2">{objective}</p>
								</div>
							</div>
						)}

						<div className="mt-16 grid gap-0 border-y border-border sm:grid-cols-3">
							<div
								className={`border-b border-border py-7 transition-all delay-300 duration-700 sm:border-b-0 sm:border-r sm:pr-8 ${contentReveal}`}
							>
								<span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#918981]">
									Mi rol
								</span>

								<p className="mt-4 text-sm leading-6 text-[#514a43]">{role}</p>
							</div>

							<div
								className={`border-b border-border py-7 transition-all delay-400 duration-700 sm:border-b-0 sm:px-8 sm:border-r ${contentReveal}`}
							>
								<span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#918981]">
									Año
								</span>

								<p className="mt-4 font-title text-3xl font-light text-[#514a43]">{year}</p>
							</div>

							<div className={`py-7 transition-all delay-500 duration-700 sm:pl-8 ${contentReveal}`}>
								<span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#918981]">
									Servicios
								</span>

								{services.length > 0 && (
									<div className="mt-4 space-y-2">
										{services.map((service, index) => (
											<div key={service} className="flex items-center gap-3">
												<span className="font-mono text-[8px] text-secondary">
													{String(index + 1).padStart(2, "0")}
												</span>

												<p className="text-sm text-[#514a43]">{service}</p>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

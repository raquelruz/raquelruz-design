import { SERVICES } from "../../data/servicesData";
import { useInView } from "../../hooks/useInView";

export const ServicesList = () => {
	const [servicesRef, isServicesVisible] = useInView({
		threshold: 0.1,
	});

	let reveal = "translate-y-8 opacity-0";

	if (isServicesVisible) {
		reveal = "translate-y-0 opacity-100";
	}

	return (
		<section
			ref={servicesRef}
			className="relative overflow-hidden border-t border-border bg-background font-landing text-text"
		>
			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-32 lg:px-16">
				<div className={`grid gap-12 transition-all duration-1000 md:grid-cols-12 md:gap-8 ${reveal}`}>
					<div className="md:col-span-4">
						<div className="flex items-center gap-4">
							<span className="font-mono text-[12px] tracking-[0.2em] text-secondary">02</span>

							<span className="h-px w-10 bg-secondary/50" />

							<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text-muted">
								Lo que hago
							</span>
						</div>

						<h2 className="mt-8 font-title text-5xl font-light leading-[0.88] tracking-[-0.05em] md:text-6xl">
							Diseño que tiene <span className="text-secondary">propósito.</span>
						</h2>
					</div>

					<div className="md:col-span-8">
						<div className="border-t border-border">
							{SERVICES.map((service, index) => (
								<div
									key={service.title}
									className="group relative border-b border-border py-8 transition-colors duration-500 hover:bg-text/2 md:py-10"
								>
									<div className="grid gap-5 md:grid-cols-12 md:items-start md:gap-8">
										<span className="font-mono text-[10px] tracking-[0.15em] text-secondary md:col-span-1">
											{String(index + 1).padStart(2, "0")}
										</span>

										<div className="md:col-span-11">
											<h3 className="font-title text-3xl font-light tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl lg:text-5xl">
												{service.title}
											</h3>

											{service.description && (
												<p className="mt-4 text-sm leading-6 text-text-muted md:text-base">
													{service.description}
												</p>
											)}

											<span className="mt-6 block h-px w-0 bg-secondary transition-all duration-700 group-hover:w-16" />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

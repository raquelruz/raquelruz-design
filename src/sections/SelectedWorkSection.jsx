import { PROJECTS } from "../utils/projectsData";

export const SelectedWorkSection = () => {
	const projects = PROJECTS;

	return (
		<section className="py-16 md:py-24 px-4 font-landing text-text">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
					<div>
						<h2 className="text-3xl md:text-4xl font-semibold">
							Proyectos <span className="text-secondary">destacados</span>
						</h2>
						<p className="mt-2 text-text-muted">
							Proyectos donde aplico diseño y desarrollo para construir soluciones digitales funcionales.
						</p>
					</div>

					<a
						href="/projects"
						className="inline-flex items-center justify-center rounded-2xl px-6 py-3 border border-border hover:bg-background/50 transition"
					>
						Ver todos
					</a>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					{projects.map((project) => {
						const href = project.externalLink ?? `/projects/${project.slug}`;
						const isExternal = Boolean(project.externalLink);

						return (
							<a
								key={project.id}
								href={href}
								target={isExternal ? "_blank" : undefined}
								rel={isExternal ? "noreferrer" : undefined}
								className="
									group relative overflow-hidden
									rounded-3xl border border-border
									bg-background/60 backdrop-blur
									transition
									hover:border-secondary/60
									hover:-translate-y-1
									hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]
								"
							>
								{/* Cover */}
								<div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-background via-white/20 to-background">
									{project.assets?.coverImage && (
										<img
											src={project.assets.coverImage}
											alt={`${project.title} cover`}
											className="
												h-full w-full object-cover
												opacity-95
												transition duration-700
												group-hover:scale-105
											"
											loading="lazy"
										/>
									)}

									<div className="absolute inset-0 bg-background/25" />
									<div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

									{project.type === "practice" && (
										<span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full border border-border bg-background/70 text-text-muted">
											Práctica
										</span>
									)}

									<span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full border border-border bg-background/70 text-text-muted">
										{project.year}
									</span>
								</div>

								<div className="p-6 flex flex-col justify-between">
									<div>
										<p className="text-sm text-secondary font-medium">{project.subtitle}</p>

										<h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>

										<p className="mt-2 text-text-muted leading-relaxed">{project.description}</p>

										<div className="mt-5 h-px w-full bg-border/60" />

										<div className="mt-4 flex flex-wrap gap-2">
											{project.techStack?.map((tech) => (
												<span
													key={tech}
													className=" text-xs px-3 py-1 rounded-full border border-border bg-background/40 text-text-muted">
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* CTA */}
									<div className="mt-6 inline-flex items-center gap-2 text-secondary font-medium">
										<span className="opacity-90">{isExternal ? "Ver demo" : "Ver proyecto"}</span>
										<span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition">
											→
										</span>
									</div>
								</div>
							</a>
						);
					})}
				</div>

				{projects.length === 0 && <p className="text-text-muted text-sm mt-6">Proyectos en preparación.</p>}
			</div>
		</section>
	);
};

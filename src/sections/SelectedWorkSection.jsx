import { PROJECTS } from "../utils/projectsData";
import { ProjectCard } from "../components/ProjectCard";

export const SelectedWorkSection = () => {
	const projects = PROJECTS;

	return (
		<section className="py-16 px-4 font-landing text-text md:py-24">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
					<div>
						<span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
							Proyectos
						</span>
						<h2 className="font-title text-text mt-4 text-3xl md:text-5xl">Proyectos destacados</h2>
						<p className="mt-4 max-w-full text-text-muted text-lg">
							Proyectos donde aplico diseño y desarrollo para construir soluciones
							digitales funcionales.
						</p>
					</div>

					<a
						href="/projects"
						className="inline-flex w-fit items-center gap-2 rounded-full border border-text/20 px-6 py-3 text-sm font-medium text-text transition-colors hover:border-text/40"
					>
						Ver todos ↗
					</a>
				</div>

				<div className="flex flex-col gap-16 md:gap-24">
					{projects.map((project, index) => (
						<ProjectCard key={project.id} {...project} index={index} />
					))}
				</div>

				{projects.length === 0 && (
					<p className="mt-6 text-sm text-text-muted">Proyectos en preparación.</p>
				)}
			</div>
		</section>
	);
};

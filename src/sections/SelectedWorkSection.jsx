import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { PROJECTS } from "../data/projectsData";
import { ProjectListItem } from "../components/projects/ProjectListItem";
import { useInView } from "../hooks/useInView";

export const SelectedWorkSection = () => {
	const projects = PROJECTS.filter((project) => project.featuredHome);

	const [ref, isInView] = useInView();

	let revealClass = "translate-y-8 opacity-0";

	if (isInView) {
		revealClass = "translate-y-0 opacity-100";
	}

	const hasProjects = projects.length > 0;

	return (
		<section ref={ref} className="border-t border-border px-5 py-20 font-landing text-text md:px-8 md:py-32">
			<div className={`mx-auto max-w-7xl transition-all duration-1000 ease-out ${revealClass}`}>
				<div>
					<div>
						<h2 className="font-title text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
							Trabajo seleccionado
							<span className="text-secondary">.</span>
						</h2>

						<div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<p className="text-sm leading-relaxed text-text-muted md:text-base">
								Una selección de proyectos donde diseño, desarrollo y estrategia se encuentran para
								crear experiencias digitales funcionales.
							</p>

							<Link
								to="/projects"
								className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-text/20 pb-2 text-xs font-medium uppercase tracking-[0.18em] text-text transition-colors hover:border-secondary hover:text-secondary"
							>
								Ver todos los proyectos
								<HiArrowUpRight
									size={15}
									className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
								/>
							</Link>
						</div>
					</div>
				</div>

				<div className="mt-20 md:mt-28">
					{hasProjects && (
						<div className="flex flex-col">
							{projects.map((project, index) => (
								<ProjectListItem key={project.id} project={project} index={index} />
							))}
						</div>
					)}

					{!hasProjects && <p className="text-sm text-text-muted">Proyectos en preparación.</p>}
				</div>
			</div>
		</section>
	);
};

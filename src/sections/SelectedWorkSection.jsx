import { Link } from "react-router-dom";
import { PROJECTS } from "../utils/projectsData";
import { ProjectCard } from "../components/ProjectCard";
import { HiArrowUpRight } from "react-icons/hi2";
import { useInView } from "../hooks/useInView";

export const SelectedWorkSection = () => {
	const projects = PROJECTS;
	const [ref, isInView] = useInView();

	let revealClass = "translate-y-8 opacity-0";
	if (isInView) {
		revealClass = "translate-y-0 opacity-100";
	}

	return (
		<section
			ref={ref}
			className="border-t border-border py-16 px-4 font-landing text-text md:py-24"
		>
			<div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${revealClass}`}>
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
					<div>
						<span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
							Proyectos
						</span>
						<h2 className="font-title text-text mt-4 font-light text-3xl leading-tight md:text-6xl">
							Proyectos <span className="text-secondary/40">destacados.</span>
						</h2>
						<p className="mt-4 text-text-muted text-lg leading-relaxed">
							Proyectos donde aplico diseño y desarrollo para construir soluciones
							digitales funcionales.
						</p>
					</div>

					<Link
						to="/projects"
						className="group inline-flex w-fit items-center gap-2 rounded-full border border-text/20 px-6 py-3 text-sm font-medium text-text transition-colors hover:border-secondary/40 hover:text-secondary"
					>
						Ver todos
						<HiArrowUpRight
							size={16}
							className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</Link>
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
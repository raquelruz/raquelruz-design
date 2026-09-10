import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { PROJECTS } from "../../utils/projectsData";
import { useInView } from "../../hooks/useInView";

export const ProjectDetailNextProject = ({ project }) => {
	const projectIndex = PROJECTS.findIndex((item) => item.id === project.id);

	let nextProjectIndex = projectIndex + 1;

	if (nextProjectIndex >= PROJECTS.length) {
		nextProjectIndex = 0;
	}

	const nextProject = PROJECTS[nextProjectIndex];

	const [nextRef, isNextVisible] = useInView({
		threshold: 0.2,
	});

	let reveal = "translate-y-12 opacity-0";
	let numberReveal = "translate-y-10 opacity-0";

	if (isNextVisible) {
		reveal = "translate-y-0 opacity-100";
		numberReveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={nextRef} className="group relative overflow-hidden bg-[#f7f5f1]">
			<div
				className={`pointer-events-none absolute -left-8 -top-20 select-none font-title text-[22rem] font-light leading-none tracking-[-0.08em] text-[#292725]/2.5 transition-all duration-1600 ease-out md:text-[32rem] ${numberReveal}`}
			>
				06
			</div>

			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-36 lg:px-16">
				<div className={`flex items-center gap-4 transition-all duration-700 ${reveal}`}>
					<span className="font-mono text-[12px] tracking-[0.2em] text-secondary">06</span>

					<span className="h-px w-10 bg-secondary/50" />

					<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#918981]">
						Siguiente proyecto
					</span>
				</div>

				<Link to={`/projects/${nextProject.slug}`} className="mt-16 block">
					<div className="grid items-end gap-12 md:grid-cols-12 md:gap-8">
						<div className="md:col-span-9">
							<h2
								className={`mt-5 max-w-5xl font-title text-6xl font-light leading-[0.85] tracking-[-0.06em] text-[#292725] transition-all duration-1000 ease-out group-hover:text-secondary md:text-8xl lg:text-[9.5rem] ${reveal}`}
							>
								{nextProject.title}
							</h2>
						</div>

						<div className="flex justify-start md:col-span-3 md:justify-end">
							<div
								className={`flex h-20 w-20 items-center justify-center rounded-full border border-[#cec5bb] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white md:h-28 md:w-28 ${reveal}`}
							>
								<HiArrowRight
									size={28}
									className="transition-transform duration-500 group-hover:translate-x-2"
								/>
							</div>
						</div>
					</div>
				</Link>

				<div
					className={`mt-16 flex flex-col gap-5 border-t border-[#292725]/10 pt-6 transition-all delay-300 duration-700 sm:flex-row sm:items-center sm:justify-between ${reveal}`}
				>
					<div className="flex items-center gap-4">
						<span className="h-1.5 w-1.5 rounded-full bg-secondary" />

						<span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#918981]">
							Explorar proyecto
						</span>
					</div>

					<div className="flex items-center gap-6 font-mono text-[9px] uppercase tracking-[0.18em] text-[#918981]">
						<span>{nextProject.year}</span>

						<span className="h-3 w-px bg-[#292725]/15" />

						<span>{nextProject.type}</span>
					</div>
				</div>
			</div>
		</section>
	);
};

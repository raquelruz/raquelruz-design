import { useState } from "react";
import { FaArrowDown, FaGithub } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { PROJECTS } from "../utils/projectsData";
import { FeaturedProject } from "../components/Projects/FeaturedProject";
import { ProjectListItem } from "../components/Projects/ProjectListItem";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FILTERS = [
	{
		label: "Todos",
		value: "all",
	},
	{
		label: "Desarrollo",
		value: "development",
	},
	{
		label: "UI / UX",
		value: "design",
	},
	{
		label: "Práctica",
		value: "practice",
	},
];

export const ProjectsPage = () => {
	const [activeFilter, setActiveFilter] = useState("all");

	const sectionRef = useScrollReveal([activeFilter]);

	const featuredProject = PROJECTS.find((project) => project.id === "nomadconnect");

	const filteredProjects = PROJECTS.filter((project) => {
		if (activeFilter === "all") {
			return true;
		}

		return project.type === activeFilter;
	});

	const otherProjects = filteredProjects.filter((project) => project.id !== featuredProject?.id);

	const showFeatured = activeFilter === "all" && Boolean(featuredProject);

	const showEmptyState = otherProjects.length === 0 && activeFilter !== "all";

	const handleFilterChange = (filter) => {
		setActiveFilter(filter);
	};

	return (
		<main ref={sectionRef} className="min-h-screen overflow-hidden bg-[#f8f5f0] text-[#302b27]">
			<section className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36 lg:px-14">
				<div className="grid gap-14 lg:grid-cols-[1fr_380px] lg:items-end">
					<div>
						<div data-reveal className="reveal mb-10 flex items-center gap-3">
							<span className="h-2 w-2 rounded-full bg-secondary" />

							<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8c8175]">
								Proyectos
							</span>
						</div>

						<div data-reveal className="reveal reveal-delay-100">
							<h1 className="font-title text-[clamp(5rem,11vw,10rem)] font-light leading-[0.78] tracking-[-0.055em]">
								Lo que {" "}
								<span className="ml-[10vw] italic text-secondary">construyo.</span>
							</h1>
						</div>
					</div>

					<div data-reveal className="reveal reveal-delay-200 lg:pb-2">
						<p className="text-sm leading-7 text-[#746d65]">
							Desarrollo proyectos que mezclan código, diseño y curiosidad. Cada uno representa una parte
							de lo que estoy aprendiendo y construyendo.
						</p>
					</div>
				</div>

				<div data-reveal className="reveal reveal-delay-300 mt-20 border-t border-[#ded7ce] pt-5">
					<div className="flex items-center justify-between">
						<span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8c8175]">
							Una selección de mi trabajo
						</span>

						<div className="flex items-center gap-3">
							<span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8c8175]">
								Explorar
							</span>

							<span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d1c8bd]">
								<FaArrowDown size={9} className="text-secondary" />
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
				<div data-reveal className="reveal border-y border-[#ded7ce] py-5">
					<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
						<div className="flex flex-wrap gap-2">
							{FILTERS.map((filter) => {
								const isActive = activeFilter === filter.value;

								let buttonClass =
									"border-[#ded7ce] bg-transparent text-[#7c736a] hover:border-[#b9aea2] hover:bg-[#f1ece5]";

								if (isActive) {
									buttonClass = "border-[#302b27] bg-[#302b27] text-[#f8f5f0]";
								}

								return (
									<button
										key={filter.value}
										type="button"
										onClick={() => handleFilterChange(filter.value)}
										className={`rounded-full border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${buttonClass}`}
									>
										{filter.label}
									</button>
								);
							})}
						</div>

						<span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9a9086]">
							{activeFilter === "all"
								? "Todos los proyectos"
								: FILTERS.find((filter) => filter.value === activeFilter)?.label}
						</span>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 pb-28 pt-16 md:px-10 md:pb-36 md:pt-24 lg:px-14">
				{showFeatured && (
					<div data-reveal className="reveal mb-28 md:mb-36">
						<div className="mb-7 flex items-center justify-between">
							<div className="flex items-center gap-3">
								<span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
									Proyecto destacado
								</span>

								<span className="h-px w-10 bg-[#ded7ce]" />
							</div>

							<span className="font-mono text-[10px] text-[#9a9086]">01</span>
						</div>

						<FeaturedProject project={featuredProject} />
					</div>
				)}

				{otherProjects.length > 0 && (
					<div>
						<div
							data-reveal
							className="reveal mb-8 flex items-end justify-between border-b border-[#ded7ce] pb-5"
						>
							<div>
								<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8c8175]">
									Colección
								</span>

								<h2 className="mt-3 font-title text-4xl font-light tracking-[-0.03em] text-[#302b27] md:text-5xl">
									Otros proyectos
								</h2>
							</div>

							<span className="font-mono text-[10px] text-[#9a9086]">
								{String(otherProjects.length).padStart(2, "0")}
							</span>
						</div>

						<div key={activeFilter}>
							{otherProjects.map((project, index) => {
								let delayClass = "reveal-delay-100";

								if (index % 2 !== 0) {
									delayClass = "reveal-delay-200";
								}

								return (
									<div
										key={`${activeFilter}-${project.id}`}
										data-reveal
										className={`reveal ${delayClass}`}
									>
										<ProjectListItem project={project} index={index} />
									</div>
								);
							})}
						</div>
					</div>
				)}

				{showEmptyState && (
					<div
						data-reveal
						className="reveal flex min-h-90 flex-col items-center justify-center border-y border-[#ded7ce] text-center"
					>
						<span className="font-title text-5xl italic text-secondary">✦</span>

						<span className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9a9086]">
							Próximamente
						</span>

						<h2 className="mt-4 font-title text-4xl font-light tracking-[-0.03em] text-[#5e554c] md:text-5xl">
							Algo nuevo está en camino.
						</h2>

						<p className="mt-4 max-w-sm text-sm leading-6 text-[#8c8175]">
							Estoy preparando nuevos proyectos para seguir ampliando esta colección.
						</p>
					</div>
				)}
			</section>

			<section className="border-t border-[#ded7ce] bg-[#302b27] text-[#f8f5f0]">
				<div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-14">
					<div data-reveal className="reveal grid gap-14 lg:grid-cols-[1fr_320px] lg:items-end">
						<div>
							<span className="font-mono text-[10px] uppercase tracking-[0.22em] text-secondary">
								¿Tienes una idea?
							</span>

							<h2 className="mt-7 max-w-4xl font-title text-6xl font-light leading-[0.9] tracking-[-0.045em] md:text-8xl">
								Vamos a hacerla
								<br />
								<span className="italic text-[#cfc5ba]">realidad.</span>
							</h2>
						</div>

						<div>
							<p className="text-sm leading-7 text-[#aaa198]">
								Si buscas a alguien que combine desarrollo, diseño y ganas de seguir aprendiendo, me
								encantará conocer tu proyecto.
							</p>

							<Link
								to="/contact"
								className="group mt-8 inline-flex items-center gap-4 border-b border-[#70675f] pb-3 text-xs uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#b2622d]"
							>
								Hablemos
								<HiArrowUpRight
									size={12}
									className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-[#302b27]">
				<div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[#4a433e] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
					<p className="font-title text-xl italic text-[#aaa198]">Raquel Ruiz</p>

					<div className="flex items-center gap-6">
						<span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#716960]">
							Full Stack Developer
						</span>

						<a
							href="https://github.com/raquelruz"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-[#aaa198] transition-colors duration-300 hover:text-[#f8f5f0]"
						>
							<FaGithub size={16} />
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
};

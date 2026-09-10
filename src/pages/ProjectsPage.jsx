import { useState } from "react";
import { FaArrowDown, FaGithub } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projectsData";
import { FeaturedProject } from "../components/projects/FeaturedProject";
import { ProjectListItem } from "../components/projects/ProjectListItem";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Footer } from "../components/Footer";

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
								Lo que <span className="ml-[10vw] italic text-secondary">construyo.</span>
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
						<div data-reveal className="reveal mb-8 flex items-end justify-between pb-5">
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
						className="reveal flex min-h-90 flex-col items-center justify-center border-[#ded7ce] text-center"
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

			<section className="border-t border-border bg-background-soft">
				<div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32 lg:px-14">
					<div data-reveal className="reveal">
						<div className="flex items-start justify-between gap-8">
							<span className="text-[9px] font-medium uppercase tracking-[0.22em] text-text-muted">
								— Contacto
							</span>

							<span className="hidden text-[9px] uppercase tracking-[0.18em] text-text-muted md:block">
								Disponible para nuevos proyectos
							</span>
						</div>

						<div className="mt-20 md:mt-28">
							<p className="text-[13px] leading-6 text-text-muted">
								Una idea, una web que necesita una vuelta, un proyecto que todavía no sabe muy bien qué
								quiere ser.
							</p>

							<h2 className="mt-8 max-w-5xl font-title text-6xl font-light leading-[0.86] tracking-[-0.055em] text-text md:text-8xl lg:text-9xl">
								Podemos empezar
								<br />
								<span className="italic text-text-muted">por ahí.</span>
							</h2>
						</div>

						<div className="mt-16 flex flex-col gap-8 border-t border-border pt-6 md:mt-24 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-[9px] uppercase tracking-[0.2em] text-text-muted">¿Hablamos?</p>

								<a
									href="mailto:"
									className="group mt-3 inline-flex items-center gap-3 font-title text-2xl font-light tracking-[-0.03em] text-text transition-colors duration-300 hover:text-secondary md:text-3xl"
								>
									Cuéntame qué tienes en mente
									<HiArrowUpRight
										size={18}
										className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
									/>
								</a>
							</div>

							<Link
								to="/contact"
								className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted transition-colors duration-300 hover:text-text"
							>
								Ir a contacto
								<HiArrowUpRight
									size={13}
									className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
};

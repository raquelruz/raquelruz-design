import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../utils/projectsData";
import { FeaturedProject } from "../components/Projects/FeaturedProject";
import { ProjectCard } from "../components/Projects/ProjectCard";
import { ProjectListItem } from "../components/Projects/ProjectListItem";

const FILTERS = [
	{ label: "Todos", value: "all" },
	{ label: "Desarrollo", value: "development" },
	{ label: "UI / UX", value: "design" },
	{ label: "Práctica", value: "practice" },
];

export const ProjectsPage = () => {
	const [activeFilter, setActiveFilter] = useState("all");

	const featuredProject = PROJECTS.find((project) => project.id === "nomadconnect");

	const filteredProjects = PROJECTS.filter((project) => {
		if (activeFilter === "all") return true;
		return project.type === activeFilter;
	});

	const otherProjects = filteredProjects.filter((project) => project.id !== featuredProject?.id);

	const showFeatured = activeFilter === "all" && Boolean(featuredProject);
	const showEmptyState = otherProjects.length === 0 && activeFilter !== "all";

	return (
		<main className="min-h-screen bg-[#f8f5f0] text-[#302b27]">
			<section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
				<div>
					<span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8c8175]">
						Mis proyectos
					</span>

					<h1 className="font-serif text-6xl font-light leading-[1.02] tracking-[-0.035em] md:text-7xl">
						Ideas que se convierten
						<br />
						en experiencias <span className="text-secondary"> digitales.</span>
					</h1>

					<p className="mt-7 text-[15px] leading-7 text-[#746d65] md:text-h6">
						Una selección de proyectos donde combino desarrollo, diseño y creatividad para construir
						experiencias digitales funcionales, cuidadas y con intención.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="flex flex-wrap gap-3 border-t border-[#ded7ce] pt-7">
					{FILTERS.map((filter) => {
						const isActive = activeFilter === filter.value;

						return (
							<button
								key={filter.value}
								onClick={() => setActiveFilter(filter.value)}
								className={`rounded-full border px-5 py-2.5 text-[11px] font-medium transition-all duration-300 ${
									isActive
										? "border-[#958879] bg-[#958879] text-white"
										: "border-[#ded7ce] text-[#756d64] hover:border-[#b8ada0] hover:bg-[#eee9e2]"
								}`}
							>
								{filter.label}
							</button>
						);
					})}
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 pb-28 pt-10 md:px-10">
				{showFeatured && (
					<div className="mb-7">
						<FeaturedProject project={featuredProject} />
					</div>
				)}

				<div className="flex flex-col">
					{otherProjects.map((project, index) => (
						<ProjectListItem key={project.id} project={project} index={index} />
					))}
				</div>

				{showEmptyState && (
					<div className="py-24 text-center">
						<p className="font-serif text-2xl text-[#5e554c]">Próximamente...</p>
					</div>
				)}
			</section>

			<footer className="border-t border-[#ded7ce] bg-[#f2ede7]">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row md:px-10">
					<div className="h-px w-16 bg-[#bcb1a5]" />

					<p className="font-serif text-xl italic text-[#756b61]">Raquel Ruiz | Full Stack Developer</p>

					<div className="flex items-center gap-5 text-[#5d554d]">
						<a
							href="https://github.com/raquelruz"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-opacity hover:opacity-60"
						>
							<FaGithub size={17} />
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
};

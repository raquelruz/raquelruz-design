import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { ProjectTags } from "./ProjectTags";
import { getTypeLabel } from "../../utils/projectHelpers";

export const ProjectPageCard = ({ project }) => {
	const hasExternalLink = Boolean(project.externalLink);
	const hasGithub = Boolean(project.github);
	const hasServices = project.services?.length > 0;
	const hasCoverImage = Boolean(project.assets?.coverImage);

	return (
		<article className="group overflow-hidden rounded-3xl border border-[#ded7ce] bg-[#fdfbf8] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(70,55,40,0.08)]">
			<div className="relative aspect-video overflow-hidden bg-[#eee7df]">
				{hasCoverImage && (
					<img
						src={project.assets.coverImage}
						alt={`${project.title} preview`}
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
					/>
				)}

				<div className="absolute left-5 top-5">
					<span className="rounded-full border border-white/40 bg-white/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#51483f] backdrop-blur-md">
						{getTypeLabel(project.type)}
					</span>
				</div>

				{hasExternalLink && (
					
					<a	href={project.externalLink}
						target="_blank"
						rel="noopener noreferrer"
						className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#39332d] opacity-0 shadow-sm backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
						aria-label={`Visitar ${project.title}`}
					>
						<HiArrowUpRight size={18} />
					</a>
				)}
			</div>

			<div className="p-6 md:p-7">
				<div className="mb-4 flex items-start justify-between gap-4">
					<div>
						<p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#94887c]">
							{project.year}
						</p>

						<h3 className="font-serif text-[27px] leading-tight tracking-[-0.02em] text-[#302b27]">
							{project.title}
						</h3>

						<p className="mt-1 text-[12px] text-[#8a8178]">{project.subtitle}</p>
					</div>
				</div>

				<p className="text-[14px] leading-6 text-[#716b64]">{project.description}</p>

				{hasServices && (
					<div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
						{project.services.map((service) => (
							<span key={service} className="text-[11px] font-medium text-[#574f47]">
								{service}
							</span>
						))}
					</div>
				)}

				<div className="mt-6 border-t border-[#e7e0d8] pt-5">
					<ProjectTags project={project} />
				</div>

				<div className="mt-6 flex items-center justify-between">
					{hasExternalLink && (
						
						<a	href={project.externalLink}
							target="_blank"
							rel="noopener noreferrer"
							className="group/link flex items-center gap-2 text-[13px] font-medium text-[#39332d]"
						>
							Ver proyecto
							<HiArrowUpRight
								size={16}
								className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
							/>
						</a>
					)}

					{!hasExternalLink && <span className="text-[13px] text-[#948a80]">Proyecto privado</span>}

					<div className="flex items-center gap-3">
						{hasGithub && (
							
							<a	href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`GitHub de ${project.title}`}
								className="text-[#403a34] transition-transform duration-300 hover:-translate-y-1"
							>
								<FaGithub size={18} />
							</a>
						)}

						{hasExternalLink && (
							
							<a	href={project.externalLink}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Abrir ${project.title}`}
								className="text-[#403a34] transition-transform duration-300 hover:-translate-y-1"
							>
								<HiArrowUpRight size={19} />
							</a>
						)}
					</div>
				</div>
			</div>
		</article>
	);
};
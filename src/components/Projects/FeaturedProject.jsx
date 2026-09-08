import { HiArrowUpRight } from "react-icons/hi2";
import { ProjectTags } from "./ProjectTags";
import { getTypeLabel } from "../../utils/projectHelpers";

export const FeaturedProject = ({ project }) => {
	const hasKeyFeatures = project.keyFeatures?.length > 0;
	const hasExternalLink = Boolean(project.externalLink);

	return (
		<article className="overflow-hidden rounded-[28px] border border-[#ded7ce] bg-[#fdfbf8]">
			<div className="grid md:grid-cols-[1.35fr_0.65fr]">
				<div className="relative min-h-80 overflow-hidden bg-[#eee7df] md:min-h-125">
					<img
						src={project.assets.coverImage}
						alt={`${project.title} preview`}
						className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
					/>

					<div className="absolute left-6 top-6">
						<span className="rounded-full border border-white/40 bg-white/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#51483f] backdrop-blur-md">
							Proyecto destacado
						</span>
					</div>
				</div>

				<div className="flex flex-col justify-between p-7 md:p-9">
					<div>
						<div className="flex items-center justify-between">
							<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#94887c]">
								{project.year}
							</span>

							<span className="text-[10px] uppercase tracking-[0.15em] text-[#94887c]">
								{getTypeLabel(project.type)}
							</span>
						</div>

						<h2 className="mt-7 font-serif text-h3 leading-none tracking-[-0.03em] text-[#302b27]">
							{project.title}
						</h2>

						<p className="mt-3 text-[13px] text-[#8a8178]">{project.subtitle}</p>

						<p className="mt-7 text-[14px] leading-7 text-[#716b64]">{project.description}</p>

						{hasKeyFeatures && (
							<div className="mt-7">
								<p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94887c]">
									Qué he construido
								</p>

								<ul className="space-y-2">
									{project.keyFeatures.map((feature) => (
										<li
											key={feature}
											className="flex items-start gap-2 text-[12px] leading-5 text-[#655d55]"
										>
											<span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-[#938779]" />
											{feature}
										</li>
									))}
								</ul>
							</div>
						)}

						<div className="mt-7">
							<ProjectTags project={project} />
						</div>
					</div>

					<div className="mt-10 border-t border-[#e7e0d8] pt-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-[10px] uppercase tracking-[0.15em] text-[#94887c]">
									Mi rol
								</p>
								<p className="mt-1 text-[12px] text-[#514a43]">{project.role}</p>
							</div>

							{hasExternalLink && (
								
								<a	href={project.externalLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex h-11 items-center gap-2 rounded-full bg-[#39332d] px-5 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#554b41]"
								>
									Ver proyecto
									<HiArrowUpRight size={16} />
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};
import { Link } from "react-router-dom";
import { HiArrowUpRight, HiArrowRight } from "react-icons/hi2";
import { ProjectTags } from "./ProjectTags";
import { getTypeLabel } from "../../utils/projectHelpers";

export const ProjectListItem = ({ project, index = 0 }) => {
	const { title, subtitle, year, type, description, externalLink, slug, assets } = project;

	const isReversed = index % 2 === 1;
	const hasCaseStudy = Boolean(slug);
	const hasExternalLink = Boolean(externalLink);
	const hasCoverImage = Boolean(assets?.coverImage);
	const hasSubtitle = Boolean(subtitle);

	return (
		<article className="grid grid-cols-1 gap-8 border-t border-[#ded7ce] py-12 md:grid-cols-12 md:gap-10 md:py-16">
			<div className={`md:col-span-7 ${isReversed ? "md:order-2" : ""}`}>
				{hasCoverImage && (
					<div className="aspect-4/3 overflow-hidden rounded-2xl bg-[#eee7df]">
						<img
							src={assets.coverImage}
							alt={`${title} preview`}
							className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
							loading="lazy"
						/>
					</div>
				)}
			</div>

			<div className={`flex flex-col justify-center md:col-span-5 ${isReversed ? "md:order-1" : ""}`}>
				<div className="flex items-baseline gap-3 text-[11px] text-[#94887c]">
					<span>{year}</span>
					<span>{getTypeLabel(type)}</span>
				</div>

				<h3 className="mt-4 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-[#302b27] md:text-[36px]">
					{title}
				</h3>

				{hasSubtitle && (
					<p className="mt-2 text-[13px] text-[#8a8178]">{subtitle}</p>
				)}

				<p className="mt-5 text-[14px] leading-7 text-[#716b64]">{description}</p>

				<div className="mt-6">
					<ProjectTags project={project} />
				</div>

				<div className="mt-8 flex items-center gap-6">
					{hasCaseStudy && (
						<Link
							to={`/projects/${slug}`}
							className="group/cta inline-flex items-center gap-2 text-[13px] font-medium text-[#39332d]"
						>
							Ver case study
							<HiArrowRight
								size={15}
								className="transition-transform group-hover/cta:translate-x-1"
							/>
						</Link>
					)}

					{hasExternalLink && (
						
						<a	href={externalLink}
							target="_blank"
							rel="noreferrer"
							className="group/demo inline-flex items-center gap-2 text-[13px] text-[#8a8178] transition hover:text-[#39332d]"
						>
							Ver demo
							<HiArrowUpRight
								size={14}
								className="transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
							/>
						</a>
					)}
				</div>
			</div>
		</article>
	);
};
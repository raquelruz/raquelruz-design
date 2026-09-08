import { Link } from "react-router-dom";
import { HiArrowUpRight, HiArrowRight } from "react-icons/hi2";

export const ProjectCard = ({ project, index = 0 }) => {
	const { title, subtitle, year, type, description, techStack = [], externalLink, slug, assets } = project;

	const isReversed = index % 2 === 1;
	const hasCaseStudy = Boolean(slug);
	const isPractice = type === "practice";
	const hasExternalLink = Boolean(externalLink);
	const hasTechStack = techStack.length > 0;

	return (
		<div className="group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
			<div
				className={`relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-background-soft ${
					isReversed ? "md:order-2" : ""
				}`}
			>
				{assets?.coverImage && (
					<img
						src={assets.coverImage}
						alt={`${title} cover`}
						className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
						loading="lazy"
					/>
				)}

				{isPractice && (
					<span className="absolute top-4 left-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-text-muted">
						Práctica
					</span>
				)}

				<span className="absolute top-4 right-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-text-muted">
					{year}
				</span>
			</div>

			<div>
				<span className="font-title text-5xl italic text-secondary">
					{String(index + 1).padStart(2, "0")}
				</span>
				<p className="font-title text-text mt-2 text-2xl md:text-5xl">{title}</p>
				<p className="mt-2 text-sm text-secondary">{subtitle?.toUpperCase()}</p>
				<p className="mt-4 text-text-muted leading-relaxed text-lg">{description}</p>

				{hasTechStack && (
					<div className="mt-4 flex flex-wrap gap-2">
						{techStack.map((tech) => (
							<span
								key={tech}
								className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
							>
								{tech}
							</span>
						))}
					</div>
				)}

				<div className="mt-6 flex flex-wrap items-center gap-4">
					{hasCaseStudy && (
						<Link
							to={`/projects/${slug}`}
							className="group/cta inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-medium text-white transition hover:bg-secondary/90"
						>
							Ver case study
							<HiArrowRight
								size={16}
								className="transition-transform group-hover/cta:translate-x-1"
							/>
						</Link>
					)}

					{hasExternalLink && (
						
						<a	href={externalLink}
							target="_blank"
							rel="noreferrer"
							className="group/demo inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-secondary"
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
		</div>
	);
};
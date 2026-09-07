export const ProjectCard = ({
	title,
	subtitle,
	year,
	type,
	description,
	techStack = [],
	externalLink,
	slug,
	assets,
	index = 0,
}) => {
	const href = externalLink ?? `/projects/${slug}`;
	const isExternal = Boolean(externalLink);
	const isReversed = index % 2 === 1;

	return (
		<a
			href={href}
			target={isExternal ? "_blank" : undefined}
			rel={isExternal ? "noreferrer" : undefined}
			className="group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
		>
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

				{type === "practice" && (
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
				<p className="mt-2 text-sm text-secondary">{subtitle.toUpperCase()}</p>
				<p className="mt-4 max-w-full text-text-muted leading-relaxed text-lg">{description}</p>

				{techStack.length > 0 && (
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

				<div className="mt-6 inline-flex items-center gap-2 font-medium text-secondary">
					<span>{isExternal ? "Ver demo" : "Ver proyecto"}</span>
					<span className="transition-transform group-hover:translate-x-1">→</span>
				</div>
			</div>
		</a>
	);
};

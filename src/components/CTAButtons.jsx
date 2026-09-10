export const CTAButtons = ({
	primaryLabel = "Ver mi trabajo",
	secondLabel = "¡Hablemos!",
	primaryHref = "#",
	secondaryHref = "#",
}) => {
	return (
		<div className="flex items-center gap-4 px-2 py-2 bg-background-soft rounded-full shadow-sm border border-border">
			<a
				href={primaryHref}
				className="group flex items-center gap-2 px-6 py-2 rounded-full bg-secondary text-white text-sm font-medium transition hover:bg-secondary/90"
			>
				{primaryLabel}
				<span className="transition-transform group-hover:translate-x-1">↗</span>
			</a>

			<a href={secondaryHref} className="px-5 py-2 text-sm text-text-muted transition hover:text-text">
				{secondLabel}
			</a>
		</div>
	);
};

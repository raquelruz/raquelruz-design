import { useInView } from "../hooks/useInView";

export const ServiceCard = ({ title, image, description, items = [], index = 0 }) => {
	const [ref, isInView] = useInView();

	let reveal = "translate-y-6 opacity-0";

	if (isInView) {
		reveal = "translate-y-0 opacity-100";
	}

	return (
		<article
			ref={ref}
			style={{
				transitionDelay: isInView ? `${index * 100}ms` : "0ms",
			}}
			className={`group flex w-full flex-col border-t border-border py-6 transition-all duration-700 ease-out ${reveal}`}
		>
			<div className="flex items-start justify-between gap-8">
				<div>
					<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text-muted">Servicio</span>

					<h3 className="mt-3 font-title text-3xl font-light leading-[0.92] tracking-[-0.045em] text-text transition-transform duration-500 group-hover:translate-x-1 md:text-4xl lg:text-5xl">
						{title}
					</h3>
				</div>

				<span className="shrink-0 font-mono text-[12px] tracking-[0.15em] text-secondary">
					{String(index + 1).padStart(2, "0")}
				</span>
			</div>

			<div className="relative mt-10 flex h-64 w-full items-center justify-center overflow-hidden md:mt-12 md:h-72 lg:h-80">
				<img
					src={image}
					alt={title}
					className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.035]"
				/>
			</div>

			<div className="mt-10 grid gap-8 border-t border-border pt-6 md:mt-12 md:grid-cols-12">
				<div className="md:col-span-5">
					<p className="text-sm leading-6 text-text-muted md:text-base">{description}</p>
				</div>

				{items.length > 0 && (
					<ul className="flex flex-col gap-3 md:col-span-6 md:col-start-7">
						{items.map((item) => (
							<li key={item} className="flex items-start gap-3 text-sm text-text">
								<span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-secondary" />

								<span>{item}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</article>
	);
};

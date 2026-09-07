import { HiArrowUpRight } from "react-icons/hi2";
import { useInView } from "../hooks/useInView";

export const ServiceCard = ({ title, image, description, items = [], cta, index = 0 }) => {
	const [ref, isInView] = useInView();

	return (
		<article
			ref={ref}
			style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
			className={`w-full relative flex flex-col gap-4 rounded-3xl bg-background border border-border p-6 group transition-all duration-700 ease-out hover:-translate-y-1 hover:border-secondary/40 ${
				isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
			}`}
		>
			<div className="flex items-center justify-between">
				<h3 className="text-2xl font-medium text-text">{title}</h3>
				<span className="font-title text-sm italic text-secondary">
					{String(index + 1).padStart(2, "0")}
				</span>
			</div>

			<div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-background-soft flex items-center justify-center">
				<div className="absolute inset-0 bg-secondary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
				<img
					src={image}
					alt={title}
					className="relative z-10 max-w-[70%] max-h-[70%] object-contain transition duration-500 group-hover:scale-110"
				/>
			</div>

			<p className="text-base text-text-muted leading-relaxed">{description}</p>

			{items.length > 0 && (
				<ul className="flex flex-col gap-2">
					{items.map((item) => (
						<li key={item} className="flex items-start gap-2 text-sm text-text">
							<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
							{item}
						</li>
					))}
				</ul>
			)}

			<div className="mt-auto flex items-center justify-between pt-4">
				<span className="text-base font-medium text-secondary">{cta}</span>
				<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-background transition group-hover:rotate-45">
					<HiArrowUpRight size={18} />
				</div>
			</div>
		</article>
	);
};

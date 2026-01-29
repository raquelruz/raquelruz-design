import { HiArrowUpRight } from "react-icons/hi2";

export const ServiceCard = ({ title, image, description }) => {
	return (
		<article
			className="w-full relative flex flex-col gap-4 rounded-3xl bg-background backdrop-blur border border-border p-5 group"
		>
			<h3 className="text-lg font-medium text-text">{title}</h3>

			<div className="relative w-full rounded-xl overflow-hidden flex items-center justify-center">
				<div className="absolute inset-0 bg-secondary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
				<img
					src={image}
					alt={title}
					className="relative z-10 max-w-[80%] max-h-[80%] object-contain transition duration-500 group-hover:scale-110"
				/>
			</div>

			<p className="text-sm text-text-muted leading-relaxed">{description}</p>

			<div className="self-end mt-auto">
				<div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-background transition group-hover:rotate-45">
					<HiArrowUpRight size={18} />
				</div>
			</div>
		</article>
	);
};

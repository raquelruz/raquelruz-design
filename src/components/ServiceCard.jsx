import { HiArrowUpRight } from "react-icons/hi2";

export const ServiceCard = ({ title, image, description }) => {
	return (
		<div className="relative min-w-[320px] h-[420px] rounded-3xl bg-background backdrop-blur border border-border p-5 flex flex-col gap-4 group">
			<h3 className="text-lg font-medium text-text">{title}</h3>

			{/* Image container */}
			<div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-background via-white/70 to-background flex items-center justify-center">
				{/* Soft glow */}
				<div className="absolute inset-0 bg-secondary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

				<img
					src={image}
					alt={title}
					className="relative z-10 object-contain transition duration-500 group-hover:scale-110"
				/>
			</div>

			<div className="min-h-[130px] p-5">{description}</div>

			<div className="absolute bottom-6 right-6">
				<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-background transition group-hover:rotate-45">
					<HiArrowUpRight size={18} />
				</div>
			</div>
		</div>
	);
};

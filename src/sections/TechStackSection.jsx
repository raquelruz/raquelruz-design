import {
	SiReact,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiVite,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiGit,
	SiGithub,
	SiFigma,
	SiNotion,
	SiCanva,
	SiCloudinary,
} from "react-icons/si";

const rings = [
	{
		// Frontend
		radius: 60,
		duration: 22,
		reverse: false,
		size: "h-9 w-9",
		iconSize: 16,
		items: [
			{ name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
			{ name: "React", Icon: SiReact, color: "#61DAFB" },
			{ name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
		],
	},
	{
		// Backend
		radius: 108,
		duration: 30,
		reverse: true,
		size: "h-10 w-10",
		iconSize: 18,
		items: [
			{ name: "Express", Icon: SiExpress, color: "#000000" },
			{ name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
			{ name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
		],
	},
	{
		// Otras
		radius: 156,
		duration: 38,
		reverse: false,
		size: "h-11 w-11",
		iconSize: 20,
		items: [
			{ name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
			{ name: "Vite", Icon: SiVite, color: "#646CFF" },
			{ name: "Git", Icon: SiGit, color: "#F05032" },
			{ name: "GitHub", Icon: SiGithub, color: "#181717" },
			{ name: "Figma", Icon: SiFigma, color: "#F24E1E" },
			{ name: "Notion", Icon: SiNotion, color: "#000000" },
			{ name: "Canva", Icon: SiCanva, color: "#00C4CC" },
			{ name: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
		],
	},
];

const spinStyle = (duration, reverse) => ({
	animation: `orbit-spin ${duration}s linear infinite`,
	animationDirection: reverse ? "reverse" : "normal",
});

const OrbitRing = ({ radius, duration, reverse, size, iconSize, items }) => (
	<div
		className="orbit-anim absolute left-1/2 top-1/2 rounded-full border border-dashed border-border"
		style={{
			width: radius * 2,
			height: radius * 2,
			marginLeft: -radius,
			marginTop: -radius,
			...spinStyle(duration, reverse),
		}}
	>
		{items.map(({ name, Icon, color }, i) => {
			const angle = ((360 / items.length) * i * Math.PI) / 180;
			const x = radius * Math.cos(angle);
			const y = radius * Math.sin(angle);

			return (
				<div
					key={name}
					className="absolute"
					style={{
						left: `calc(50% + ${x}px)`,
						top: `calc(50% + ${y}px)`,
						transform: "translate(-50%, -50%)",
					}}
				>
					<div
						title={name}
						className={`orbit-anim flex ${size} items-center justify-center rounded-full border border-border bg-white`}
						style={spinStyle(duration, !reverse)}
					>
						<Icon size={iconSize} color={color} />
					</div>
				</div>
			);
		})}
	</div>
);

export const TechStackSection = () => {
	return (
		<div className="border-t border-border pt-10 md:pt-16">
			<style>{`
				@keyframes orbit-spin {
					from { transform: rotate(0deg); }
					to { transform: rotate(360deg); }
				}
				@media (prefers-reduced-motion: reduce) {
					.orbit-anim { animation: none; }
				}
			`}</style>

			<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
				<div>
					<span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
						Stack
					</span>
					<h2 className="font-title text-text mt-4 text-3xl md:text-4xl">Herramientas con las que trabajo</h2>
					<p className="mt-4 text-text-muted">
						Un stack pensado para construir productos rápidos, mantenibles y cuidados de principio a fin.
					</p>
				</div>

				<div className="relative mx-auto h-85 w-85">
					{rings.map((ring) => (
						<OrbitRing key={ring.radius} {...ring} />
					))}
				</div>
			</div>
		</div>
	);
};

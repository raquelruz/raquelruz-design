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

import { useInView } from "../hooks/useInView";

const RINGS = [
	{
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

const CATEGORIES = [
	{
		label: "Frontend",
		techs: "React, TypeScript, JavaScript, Tailwind CSS",
	},
	{
		label: "Backend",
		techs: "Node.js, Express, MongoDB",
	},
	{
		label: "Herramientas",
		techs: "Vite, Git, GitHub, Figma, Notion, Canva, Cloudinary",
	},
];

const getSpinStyle = (duration, reverse) => ({
	animation: `orbit-spin ${duration}s linear infinite`,
	animationDirection: reverse ? "reverse" : "normal",
});

const OrbitRing = ({ radius, duration, reverse, size, iconSize, items }) => {
	return (
		<div
			className="orbit-anim absolute left-1/2 top-1/2 rounded-full border border-dashed border-border"
			style={{
				width: radius * 2,
				height: radius * 2,
				marginLeft: -radius,
				marginTop: -radius,
				...getSpinStyle(duration, reverse),
			}}
		>
			{items.map(({ name, Icon, color }, index) => {
				const angle = ((360 / items.length) * index * Math.PI) / 180;

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
							className={`orbit-anim flex ${size} items-center justify-center rounded-full border border-border bg-white shadow-sm`}
							style={getSpinStyle(duration, !reverse)}
						>
							<Icon size={iconSize} color={color} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export const TechStackSection = () => {
	const [stackRef, isStackVisible] = useInView({
		threshold: 0.1,
	});

	let reveal = "translate-y-8 opacity-0";
	let numberReveal = "-translate-y-10 opacity-0";
	let lineReveal = "scale-x-0";

	if (isStackVisible) {
		reveal = "translate-y-0 opacity-100";
		numberReveal = "translate-y-0 opacity-100";
		lineReveal = "scale-x-100";
	}

	return (
		<section
			ref={stackRef}
			className="relative overflow-hidden border-t border-border bg-background font-landing text-text"
		>
			<style>{`
                @keyframes orbit-spin {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .orbit-anim {
                        animation: none;
                    }
                }
            `}</style>

			<div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-border" />
			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-32 lg:px-16">
				<div className={`transition-all duration-1000 ease-out ${reveal}`}>
					<div className="mt-10 grid gap-12 md:mt-14  md:items-end md:gap-8">
						<div>
							<h2 className="font-title text-5xl text-center font-light leading-[0.9] tracking-[-0.055em] md:text-7xl lg:text-[6.5rem]">
								Un stack pensado para construir de
								<br />
								<span className="text-secondary">principio a fin.</span>
							</h2>
						</div>
					</div>

					<div
						className={`mt-16 h-px origin-left transition-transform duration-1200 ease-out md:mt-20 ${lineReveal}`}
					/>

					<div className="mt-16 grid gap-16 md:grid-cols-12 md:items-center md:gap-8">
						<div className="order-2 md:order-1 md:col-span-7">
							<div className="border-t border-border">
								{CATEGORIES.map((category, index) => (
									<div
										key={category.label}
										className="group grid gap-3 border-b border-border py-7 transition-colors duration-500 hover:bg-text/2 sm:grid-cols-12 sm:gap-6"
									>
										<div className="sm:col-span-4">
											<span className="font-mono text-[12px] tracking-[0.15em] text-secondary">
												{String(index + 1).padStart(2, "0")}
											</span>

											<h3 className="mt-2 font-title text-2xl font-light italic tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
												{category.label}
											</h3>
										</div>

										<p className="text-sm leading-6 text-text-muted sm:col-span-8 sm:pt-5 md:text-base">
											{category.techs}
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="order-1 flex justify-center md:order-2 md:col-span-5">
							<div className="relative h-85 w-85">
								<div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/30 bg-secondary/4" />

								{RINGS.map((ring) => (
									<OrbitRing key={ring.radius} {...ring} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiFigma, SiCloudinary } from "react-icons/si";

import { useInView } from "../../hooks/useInView";

const TECH_ICONS = {
	React: {
		Icon: SiReact,
		color: "#61DAFB",
	},
	TypeScript: {
		Icon: SiTypescript,
		color: "#3178C6",
	},
	JavaScript: {
		Icon: SiJavascript,
		color: "#F7DF1E",
	},
	"Tailwind CSS": {
		Icon: SiTailwindcss,
		color: "#38BDF8",
	},
	Vite: {
		Icon: SiVite,
		color: "#646CFF",
	},
	"Node.js": {
		Icon: SiNodedotjs,
		color: "#5FA04E",
	},
	Express: {
		Icon: SiExpress,
		color: "#000000",
	},
	MongoDB: {
		Icon: SiMongodb,
		color: "#47A248",
	},
	Git: {
		Icon: SiGit,
		color: "#F05032",
	},
	GitHub: {
		Icon: SiGithub,
		color: "#181717",
	},
	Figma: {
		Icon: SiFigma,
		color: "#F24E1E",
	},
	Cloudinary: {
		Icon: SiCloudinary,
		color: "#3448C5",
	},
};

export const ProjectDetailTechStack = ({ project }) => {
	const { techStack = [] } = project;

	if (techStack.length === 0) {
		return null;
	}

	const [techRef, isTechVisible] = useInView({
		threshold: 0.15,
	});

	let reveal = "translate-y-8 opacity-0";

	if (isTechVisible) {
		reveal = "translate-y-0 opacity-100";
	}

	const radius = 155;

	return (
		<section ref={techRef} className="relative overflow-hidden bg-[#eee7df]">
			<div
				className={`pointer-events-none absolute -left-10 -top-2 select-none font-title text-[22rem] font-light leading-none tracking-[-0.08em] text-[#292725]/2.5 transition-all duration-1600 ease-out md:text-[30rem] ${
					isTechVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
				}`}
			>
				04
			</div>

			<style>
				{`
                    @keyframes stack-orbit {
                        from {
                            transform: rotate(0deg);
                        }

                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .stack-orbit {
                            animation: none !important;
                        }
                    }
                `}
			</style>

			<div className="mx-auto max-w-325 px-6 py-24 md:px-10 md:py-32 lg:px-16">
				<div className="grid gap-16 md:grid-cols-12 md:items-center">
					<div className="md:col-span-4">
						<div className={`transition-all duration-900 ${reveal}`}>
							<div className="flex items-center gap-4">
								<span className="font-mono text-[12px] tracking-[0.2em] text-secondary">04</span>

								<span className="h-px w-10 bg-secondary/50" />

								<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#918981]">
									Tecnología
								</span>
							</div>

							<h2 className="mt-8 font-title text-6xl font-light leading-[0.84] tracking-[-0.055em] md:text-7xl lg:text-8xl">
								Stack utilizado.
							</h2>

							<p className="mt-8 font-title text-2xl font-light leading-tight tracking-[-0.025em] text-[#625b54] md:text-3xl">
								Las herramientas cambian.
								<br />
								<span className="text-secondary">La intención permanece.</span>
							</p>
						</div>
					</div>

					{/* ÓRBITA */}
					<div className="flex justify-center md:col-span-8">
						<div
							className={`relative h-95 w-95 transition-all duration-1200 ${reveal} md:h-107.5 md:w-107.5`}
						>
							<div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/6 blur-2xl" />
							<div
								className="stack-orbit absolute left-1/2 top-1/2 rounded-full border border-dashed border-[#292725]/15"
								style={{
									width: radius * 2,
									height: radius * 2,
									marginLeft: -radius,
									marginTop: -radius,
									animation: "stack-orbit 32s linear infinite",
								}}
							>
								{techStack.map((name, index) => {
									const tech = TECH_ICONS[name];

									if (!tech) {
										return null;
									}

									const angle = (360 / techStack.length) * index * (Math.PI / 180);

									const x = radius * Math.cos(angle);

									const y = radius * Math.sin(angle);

									const Icon = tech.Icon;

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
												className="flex h-11 w-11 items-center justify-center rounded-full border border-[#292725]/10 bg-[#f7f5f1] shadow-sm transition-all duration-500 hover:scale-125 hover:border-secondary hover:shadow-lg"
											>
												<Icon size={18} color={tech.color} />
											</div>
										</div>
									);
								})}
							</div>

							<div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#292725]/10 bg-[#f7f5f1] shadow-sm">
								<span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#918981]">
									Stack
								</span>

								<span className="mt-1 font-title text-4xl font-light leading-none tracking-[-0.04em] text-[#514a43]">
									{techStack.length}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

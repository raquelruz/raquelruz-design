import { HiArrowUpRight } from "react-icons/hi2";

import { useInView } from "../../hooks/useInView";

export const ProjectDetailResult = ({ project }) => {
	const { result, externalLink } = project;

	const hasExternalLink = Boolean(externalLink);

	if (!hasExternalLink) {
		return null;
	}

	const [resultRef, isResultVisible] = useInView({
		threshold: 0.15,
	});

	let headingReveal = "translate-y-8 opacity-0";
	let contentReveal = "translate-y-10 opacity-0";
	let numberReveal = "-translate-y-10 opacity-0";

	if (isResultVisible) {
		headingReveal = "translate-y-0 opacity-100";
		contentReveal = "translate-y-0 opacity-100";
		numberReveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={resultRef} className="relative overflow-hidden bg-[#292725] text-[#f7f5f1]">
			<div
				className={`pointer-events-none absolute -right-10 -top-24 select-none font-title text-[22rem] font-light leading-none tracking-[-0.08em] text-white/2.5 transition-all duration-1600 ease-out md:-right-4 md:-top-32 md:text-[30rem] ${numberReveal}`}
			>
				05
			</div>

			<div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/6" />

			<div
				className={`pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/5 transition-all duration-1800 ease-out ${
					isResultVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
				}`}
			/>

			<div className="relative mx-auto max-w-325 px-6 py-24 md:px-10 md:py-36 lg:px-16">
				<div className="grid gap-16 md:grid-cols-12 md:gap-8 md:items-center">
					<div className="md:col-span-3">
						<div className={`sticky top-10 transition-all duration-700 ${headingReveal}`}>
							<div className="flex items-center gap-4">
								<span className="font-mono text-[12px] tracking-[0.2em] text-[#c18b68]">05</span>

								<span className="h-px w-10 bg-[#c18b68]/50" />
							</div>

							<p className="mt-4 font-mono text-[12px] uppercase tracking-[0.2em] text-[#77716b]">
								Resultado
							</p>
						</div>
					</div>

					<div className="md:col-span-8 md:col-start-5">
						<div className={`transition-all duration-1000 ease-out ${contentReveal}`}>
							<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#77716b]">
								El resultado
							</span>

							<p className="mt-7 max-w-4xl font-title text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
								{result}
							</p>
						</div>

						<div className={`mt-14 transition-all delay-300 duration-700 ${contentReveal}`}>
							<a
								href={externalLink}
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-5 rounded-full border border-white/15 bg-[#f7f5f1] px-6 py-4 text-sm text-[#292725] transition-all duration-500 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-white hover:shadow-[0_15px_40px_rgba(193,139,104,0.18)]"
							>
								<span>Ver proyecto online</span>

								<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#292725] text-white transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#292725]">
									<HiArrowUpRight
										size={14}
										className="transition-transform duration-500 group-hover:rotate-12"
									/>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

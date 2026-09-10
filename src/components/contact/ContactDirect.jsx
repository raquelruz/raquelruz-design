import { HiArrowUpRight } from "react-icons/hi2";

import { useInView } from "../../hooks/useInView";

const EMAIL = "raquelruizlopezcepero@gmail.com";

export const ContactDirect = () => {
	const [directRef, isDirectVisible] = useInView({
		threshold: 0.15,
	});

	let reveal = "translate-y-12 opacity-0";
	let emailReveal = "translate-y-16 opacity-0";
	let lineReveal = "scale-x-0";

	if (isDirectVisible) {
		reveal = "translate-y-0 opacity-100";
		emailReveal = "translate-y-0 opacity-100";
		lineReveal = "scale-x-100";
	}

	return (
		<section ref={directRef} className="group relative overflow-hidden bg-[#292725] font-landing text-[#f7f5f1]">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/4 transition-transform duration-2000 group-hover:scale-110" />

				<div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035] transition-transform duration-2000 group-hover:scale-125" />

				<div className="absolute left-1/2 top-1/2 h-50 w-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/6 blur-3xl transition-transform duration-1500 group-hover:scale-150" />
			</div>

			<div className="relative mx-auto max-w-325 px-6 py-28 md:px-10 md:py-40 lg:px-16">
				<div className="mt-20 md:mt-28">
					<p
						className={`font-mono text-[12px] uppercase tracking-[0.2em] text-[#77716b] transition-all duration-700 ${reveal}`}
					>
						Hagamos que pase
					</p>

					<h2
						className={`mt-6 max-w-6xl font-title text-6xl font-light leading-[0.82] tracking-[-0.065em] transition-all duration-1200 ease-out md:text-8xl lg:text-[10.5rem] ${reveal}`}
					>
						Las buenas <span className="text-secondary">ideas</span> empiezan en algún sitio
						<span className="text-secondary">.</span>
					</h2>
				</div>

				<a
					href={`mailto:${EMAIL}`}
					className={`group/email mt-20 block transition-all delay-200 duration-1000 ${emailReveal}`}
				>
					<div className="border-b border-white/12 pb-5">
						<div className="mb-5 flex items-center gap-4">
							<p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#77716b]">Escríbeme</p>

							<span className="h-px w-8 bg-secondary/50" />
						</div>

						<div className="flex items-center justify-between gap-6">
							<span className="break-all font-title text-lg font-light leading-tight tracking-[-0.025em] text-[#b9b1a9] transition-colors duration-500 group-hover/email:text-[#f7f5f1] sm:text-2xl md:text-3xl lg:text-4xl">
								{EMAIL}
							</span>

							<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover/email:-translate-y-1 group-hover/email:border-secondary group-hover/email:bg-secondary md:h-16 md:w-16">
								<HiArrowUpRight
									size={20}
									className="transition-transform duration-500 group-hover/email:-translate-y-1 group-hover/email:translate-x-1"
								/>
							</span>
						</div>
					</div>
				</a>

				<div className={`mt-16 h-px origin-left bg-white/8 transition-transform duration-1400 ${lineReveal}`} />
			</div>
		</section>
	);
};

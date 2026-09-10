import { CTAButtons } from "../components/CTAButtons";
import profileImage from "../assets/profile/raquelruz-portfolio.png";
import { useInView } from "../hooks/useInView";

export const HomeHero = () => {
	const [heroRef, isHeroVisible] = useInView({
		threshold: 0.1,
	});

	let reveal = "translate-y-8 opacity-0";

	if (isHeroVisible) {
		reveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={heroRef} className="w-full px-6 pb-24 pt-16 md:px-14 md:pb-32 md:pt-24 lg:px-20">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
				<div className={`flex flex-col gap-8 transition-all duration-1000 ease-out lg:col-span-6 ${reveal}`}>
					<div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">

						<span className="h-px w-8 bg-secondary" />
						<span>Developer · Designer · Problem Solver</span>
					</div>
					<h1 className=" font-title text-[3.25rem] font-light leading-[0.88] tracking-[-0.055em] text-text md:text-6xl lg:text-7xl xl:text-[5.25rem]">
						
						Diseño ideas. Construyo {" "}<span className="text-secondary"> soluciones. </span>{" "}
					</h1>
					<p className="text-[15px] leading-7 text-text/65 md:text-xl">
						Full Stack Developer especializada en React, TypeScript y Node.js, con experiencia en diseño
						digital y una obsesión por crear productos que funcionen tan bien como se sienten.{" "}
					</p>
				</div>

				<div
					className={`flex flex-col items-center transition-all delay-200 duration-1000 ease-out lg:col-span-6 ${reveal}`}
				>
					<div className="relative flex justify-center">
						<div className="absolute -z-10 bottom-0 h-3/4 w-3/4 rounded-full bg-secondary/20" />

						<img
							src={profileImage}
							alt="Retrato de Raquel, Full Stack Developer"
							className="relative h-auto w-full rounded-3xl object-contain sm:w-80 md:w-full"
						/>
					</div>

					<div className="relative z-20 -mt-6 md:-mt-8">
						<CTAButtons primaryHref="#proyectos" secondaryHref="mailto:raquelruizlopezcepero@gmail.com" />
					</div>
				</div>
			</div>
		</section>
	);
};

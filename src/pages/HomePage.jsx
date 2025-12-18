import { LiaStarSolid } from "react-icons/lia";
import { CTAButtons } from "../components/CTAButtons";

export const HomePage = () => {
	const heroClass = "text-4xl text-center font-landing";

	return (
		<section className="py-10">
			<div className="flex flex-col justify-center items-center">
				<div className="rounded-full border w-20 text-center font-landing">
					<p>Hola!</p>
				</div>

				<div className="py-10 font-landing">
					<div className={heroClass}>
						<p>
							Soy <span className="text-secondary">Raquel</span>,
						</p>
						<p>Full Stack Developer & Diseñadora Gráfica</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center px-20 font-landing">
					{/* Info */}
					<div className="text-left flex flex-col gap-2 w-50">
						<p className="text-sm uppercase tracking-widest text-text-muted">Especialidad</p>
						<p className="text-lg">Webs, aplicaciones y branding digital a medida</p>
					</div>

					<div className="relative flex justify-center items-end w-100 h-86">
						<div className="absolute bottom-0 w-[400px] h-70 bg-secondary rounded-t-full" />
						{/* Imagen */}
						<div className="relative z-10 w-120 h-100 rounded-2xl overflow-hidden">
							<img
								src="../../public/images/profile/me.png"
								alt="Raquel"
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="absolute bottom-2 z-20">
							<CTAButtons
								primaryHref="https://www.linkedin.com/in/raquel-ruiz-lopez/"
								secondaryHref="mailto:raquel@email.com"
							/>
						</div>
					</div>

					{/* Experience */}
					<div className="flex flex-col items-center gap-4 justify-center md:justify-end">
						<div className="flex gap-1 text-secondary">
							{Array.from({ length: 5 }).map((_, index) => (
								<LiaStarSolid key={index} size={20} />
							))}
						</div>
						<div className="text-left">
							<p className="text-2xl font-semibold">5 años</p>
							<p className="text-text-muted leading-tight">de experiencia</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

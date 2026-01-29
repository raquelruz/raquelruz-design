import { LiaStarSolid } from "react-icons/lia";
import { CTAButtons } from "../components/CTAButtons";
import { ServicesSection } from "../sections/ServicesSection";
import profileImage from "../assets/profile/me.png";
import backgroundHome from "../assets/images/background.png";
import { SelectedWorkSection } from "../sections/SelectedWorkSection";

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

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center px-6 md:px-20 font-landing">
					{/* Info */}
					<div className="text-left flex flex-col gap-2">
						<p className="text-sm uppercase tracking-widest text-text-muted">Especialidad</p>
						<p className="text-lg">Diseño y desarrollo productos digitales que se ven increíbles y funcionan de verdad</p>
					</div>

					{/* Imagen */}
					<div className="relative flex justify-center items-end w-full md:w-[420px] h-[300px] md:h-[360px]">
						<div className="absolute bottom-0  bg-secondary rounded-t-full" />

						<div className="relative z-10 w-[200px] md:w-[300px] h-[260px] md:h-[360px] rounded-2xl overflow-hidden">
							<img src={profileImage} alt="Raquel" className="w-full h-full object-cover" />
						</div>

						<div className="hidden md:block absolute bottom-2 z-20">
							<CTAButtons
								primaryHref="https://www.linkedin.com/in/raquel-ruiz-lopez/"
								secondaryHref="mailto:raquelruizlopezcepero@gmail.com"
							/>
						</div>
					</div>

					{/* Experiencia */}
					<div className="flex flex-col items-center gap-4 justify-center md:justify-end">
						<div className="flex gap-1 text-secondary">
							{Array.from({ length: 5 }).map((_, index) => (
								<LiaStarSolid key={index} size={20} />
							))}
						</div>
						<div className="text-left pb-12">
							<p className="text-2xl font-semibold">5 años</p>
							<p className="text-text-muted leading-tight">de experiencia</p>
						</div>
					</div>
				</div>
			</div>

			<div className="relative py-4 px-6 md:px-14 lg:px-20 bg-background font-landing text-text overflow-hidden rounded-[50px]">
				<div
					className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-30"
					style={{ backgroundImage: `url(${backgroundHome})` }}
				/>
				<div className="absolute inset-0" />

				<div className="relative z-10">
					<ServicesSection />
				</div>
			</div>

			<div>
				<SelectedWorkSection />
			</div>
		</section>
	);
};

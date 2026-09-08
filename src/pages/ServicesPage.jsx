import { Link } from "react-router-dom";
import { HiArrowUpRight, HiArrowLeft } from "react-icons/hi2";
import { ServiceCard } from "../components/ServiceCard";
import { SERVICES } from "../utils/servicesData";
import { useInView } from "../hooks/useInView";

const process = [
	{ step: "01", label: "Descubrir", detail: "Entender el problema y los objetivos reales del proyecto." },
	{ step: "02", label: "Diseñar", detail: "Definir estructura, UX y dirección visual antes de escribir código." },
	{ step: "03", label: "Construir", detail: "Desarrollar una solución escalable, mantenible y bien probada." },
	{ step: "04", label: "Pulir", detail: "Revisar, optimizar y cuidar cada detalle antes de entregar." },
];

export const ServicesPage = () => {
	const [ref, isInView] = useInView();

	let revealClass = "translate-y-8 opacity-0";
	if (isInView) {
		revealClass = "translate-y-0 opacity-100";
	}

	return (
		<section className="font-landing text-text px-6 pt-8 pb-24 md:px-14 lg:px-20">
			<Link
				to="/"
				className="group/back inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-secondary"
			>
				<HiArrowLeft size={14} className="transition-transform group-hover/back:-translate-x-1" />
				Volver al inicio
			</Link>

			<div
				ref={ref}
				className={`relative mt-8 overflow-hidden transition-all duration-1000 ease-out ${revealClass}`}
			>
				<span className="pointer-events-none absolute -top-2 right-0 select-none font-title italic text-border/20 text-[9rem] leading-none md:text-[13rem]">
					design & code
				</span>

				<div className="relative grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
					<div className="md:col-span-8">
						<span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
							Servicios
						</span>

						<h1 className="font-title text-text font-light mt-4 text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
							Diseño y desarrollo <span className="text-secondary">bajo un mismo techo.</span>
						</h1>
					</div>

					<p className="md:col-span-4 text-lg text-text-muted leading-relaxed">
						Desde la primera idea hasta el producto final: combino criterio visual y desarrollo técnico para
						que cada proyecto tenga sentido de principio a fin.
					</p>
				</div>

				<div className="relative mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4 md:gap-8">
					{process.map((item) => (
						<div key={item.step}>
							<span className="font-title text-2xl italic text-secondary">{item.step}</span>
							<h3 className="mt-2 font-medium text-text">{item.label}</h3>
							<p className="mt-2 text-sm text-text-muted leading-relaxed">{item.detail}</p>
						</div>
					))}
				</div>
			</div>

			<div className="mt-20 grid grid-cols-1 gap-6 border-t border-border pt-14 sm:grid-cols-2 md:mt-28 md:gap-8 md:pt-20">
				{SERVICES.map((service, index) => (
					<ServiceCard key={service.title} {...service} index={index} />
				))}
			</div>

			{/* CTA FINAL */}
			<div className="relative overflow-hidden bg-secondary px-6 py-16 text-center md:mt-32 md:px-16 md:py-24">
				<div className="relative mx-auto">
					<span className="inline-block text-xs font-semibold uppercase tracking-widest text-background/60">
						Siguiente paso
					</span>

					<h2 className="font-title text-background mt-6 text-4xl leading-[1.05] md:text-6xl">
						¿Tienes un proyecto <span className="text-background/40">en mente?</span>
					</h2>

					<p className="mx-auto mt-6 text-lg text-background/70 leading-relaxed">
						Hablemos de cómo puedo ayudarte a construirlo, desde la primera idea hasta el producto final.
					</p>

					<Link
						to="/contact"
						aria-label="Ir a contacto"
						className="group/cta mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full border border-background/30 transition duration-500 hover:border-background hover:bg-background md:h-24 md:w-24"
					>
						<HiArrowUpRight
							size={28}
							className="text-background transition-all duration-500 group-hover/cta:rotate-45 group-hover/cta:text-secondary"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

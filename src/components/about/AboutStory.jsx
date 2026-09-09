import aboutWorkspace from "../../assets/profile/about-me.jpg";

export const AboutStory = () => {
	return (
		<section className="bg-white px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
			<div className="mx-auto max-w-7xl">
				<div data-reveal className="reveal flex items-center gap-4">
					<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#99938c]">01</span>

					<span className="h-px w-8 bg-[#d8d2ca]" />

					<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#99938c]">
						De diseñadora a desarrolladora
					</span>
				</div>

				<div className="mt-20">
					<div data-reveal className="reveal reveal-delay-100">
						<h2 className="text-7xl font-light leading-[0.88] tracking-[-0.055em] text-[#292725]">
							De diseñar <span className="italic text-[#B2622D]">experiencias</span> a construirlas.
						</h2>
					</div>
				</div>

				<div className="mt-24 grid gap-16 lg:grid-cols-[1fr_0.75fr] lg:items-start lg:gap-28">
					<div data-reveal className="reveal reveal-delay-200">
						<div className="">
							<p className="text-lg leading-[1.9] text-[#5f5b57] md:text-xl">
								Antes de escribir mi primera línea de código ya llevaba años trabajando con diseño,
								creatividad y proyectos digitales.
							</p>

							<p className="mt-8 text-base leading-[1.9] text-[#77716b] md:text-lg">
								Aprendí a prestar atención a los detalles, a la composición, a la jerarquía visual y a
								cómo una persona percibe una interfaz. El diseño me enseñó a pensar no solo en cómo se
								ve algo, sino también en cómo se siente.
							</p>

							<p className="mt-8 text-base leading-[1.9] text-[#77716b] md:text-lg">
								Pero con el tiempo, diseñar dejó de ser suficiente. Quería entender qué había detrás de
								aquello que estaba creando. Quería saber cómo funcionaban las aplicaciones, cómo se
								construían y cómo podía convertir una idea en algo real.
							</p>

							<p className="mt-8 text-base leading-[1.9] text-[#77716b] md:text-lg">
								Ahí descubrí el desarrollo.
							</p>

							<p className="mt-8 text-base leading-[1.9] text-[#77716b] md:text-lg">
								Empecé por el frontend y poco a poco fui adentrándome en JavaScript, React y TypeScript.
								Después llegaron Node.js, Express, MongoDB, las APIs y todo lo necesario para entender
								un producto de principio a fin.
							</p>

							<p className="mt-8 text-base leading-[1.9] text-[#77716b] md:text-lg">
								Y fue entonces cuando entendí que no tenía que elegir entre diseño y código. Mi
								experiencia en diseño podía convertirse precisamente en una de mis mayores fortalezas
								como desarrolladora.
							</p>
						</div>

						<div
							data-reveal
							className="reveal reveal-delay-300 mt-16 border-l border-[#B2622D] pl-6 md:mt-20 md:pl-8"
						>
							<p className="text-2xl font-light leading-[1.35] tracking-[-0.02em] text-[#292725] md:text-3xl">
								Puedo pensar una interfaz, entender la experiencia que hay detrás y después convertir
								esa idea en un producto funcional.
							</p>
						</div>
					</div>

					<div data-reveal className="reveal reveal-delay-300 lg:sticky lg:top-24">
						<figure>
							<div className="group overflow-hidden rounded-4xl bg-[#f3efe9]">
								<img
									src={aboutWorkspace}
									alt="Espacio de trabajo de Raquel"
									className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
								/>
							</div>

							<figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
								<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#99938c]">
									Design / Development
								</span>

								<span className="font-mono text-[10px] text-[#99938c]">2026</span>
							</figcaption>
						</figure>
					</div>
				</div>

				<div className="mt-32 border-t border-border pt-16 md:mt-40 md:pt-20">
					<div data-reveal className="reveal flex items-center justify-between">
						<div className="flex items-center gap-4">
							<span className="h-px w-8 bg-secondary" />

							<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
								Lo que busco crear
							</span>
						</div>

						<span className="font-mono text-[10px] text-muted">01 / 01</span>
					</div>

					<div data-reveal className="reveal reveal-delay-100 mt-14 max-w-6xl md:mt-16">
						<p className="text-4xl font-light leading-[1.05] tracking-[-0.045em] text-text md:text-6xl lg:text-7xl">
							No quiero limitarme a escribir código.
						</p>

						<p className="mt-3 font-light text-4xl leading-[1.05] tracking-[-0.035em] text-secondary md:mt-4 md:text-6xl lg:text-7xl">
							Quiero crear cosas que las personas disfruten utilizando.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

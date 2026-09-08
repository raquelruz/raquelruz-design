import { useState } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const EMAIL = "raquelruizlopezcepero@gmail.com";

const INITIAL_FORM = {
	name: "",
	email: "",
	message: "",
};

export const ContactPage = () => {
	const [formData, setFormData] = useState(INITIAL_FORM);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const subject = `Contacto desde el portfolio — ${formData.name}`;

		const body = `${formData.message}

---
De: ${formData.name} (${formData.email})`;

		const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoUrl;
	};

	return (
		<section className="border-t border-border bg-background px-6 py-24 font-landing text-text md:px-14 md:py-32 lg:px-20">
			<div className="mx-auto max-w-6xl">
				<div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
					<div className="max-w-4xl">
						<div className="mb-7 flex items-center gap-3">
							<span className="h-px w-8 bg-secondary" />

							<span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">
								Contacto
							</span>
						</div>

						<h2 className="font-title text-5xl font-light leading-[0.98] tracking-[-0.035em] md:text-7xl lg:text-[88px]">
							¿Creamos algo que
							<br />
							<span className="text-secondary">merezca la pena?</span>
						</h2>
					</div>

					<a
						href={`mailto:${EMAIL}`}
						className="group hidden items-center gap-2 pb-2 text-sm text-text-muted transition-colors hover:text-text lg:flex"
					>
						{EMAIL}

						<HiArrowUpRight
							size={15}
							className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
						/>
					</a>
				</div>

				<div className="mt-16 grid gap-16 border-t border-border pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:pt-16">
					<div className="flex flex-col justify-between">
						<div>
							<p className="text-base leading-7 text-text-muted md:text-lg">
								Si tienes una idea, un proyecto o simplemente quieres hablar de desarrollo web, diseño o
								productos digitales, estaré encantada de escucharte.
							</p>

							<p className="mt-5 text-base leading-7 text-text-muted md:text-lg">
								Cuéntame qué tienes en mente y veremos cómo podemos darle forma.
							</p>
						</div>

						<div className="mt-12 border-l border-secondary/40 pl-5">
							<div className="flex items-center gap-2">
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-50" />

									<span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
								</span>

								<span className="text-[11px] font-medium uppercase tracking-[0.16em] text-text">
									Disponible para nuevos proyectos
								</span>
							</div>

							<p className="mt-2 text-xs leading-5 text-text-muted">
								Actualmente abierta a oportunidades profesionales y colaboraciones.
							</p>
						</div>

						<div className="mt-12 flex items-center gap-3">
							<a
								href="https://github.com/raquelruz"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="group flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-background"
							>
								<FaGithub
									size={16}
									className="transition-transform duration-300 group-hover:-translate-y-0.5"
								/>
							</a>

							<a
								href="https://www.linkedin.com/in/raquel-ruiz-lopez/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="group flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-background"
							>
								<FaLinkedin
									size={16}
									className="transition-transform duration-300 group-hover:-translate-y-0.5"
								/>
							</a>

							<a
								href={`mailto:${EMAIL}`}
								className="group flex h-11 items-center gap-2 rounded-full border border-border px-5 text-xs text-text transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-background"
							>
								Email
								<HiArrowUpRight
									size={14}
									className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								/>
							</a>
						</div>
					</div>

					<form
						onSubmit={handleSubmit}
						className="rounded-3xl border border-border bg-background/40 p-6 md:p-8"
					>
						<div className="mb-8">
							<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
								Contacto
							</span>

							<h3 className="mt-2 font-title text-2xl font-light">Cuéntame sobre tu proyecto</h3>
						</div>

						<div className="space-y-8">
							<div>
								<label
									htmlFor="name"
									className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted"
								>
									Tu nombre
								</label>

								<input
									id="name"
									name="name"
									type="text"
									required
									value={formData.name}
									onChange={handleChange}
									placeholder="¿Cómo te llamas?"
									className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-text placeholder:text-text-muted/50 outline-none transition-colors focus:border-secondary"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted"
								>
									Tu email
								</label>

								<input
									id="email"
									name="email"
									type="email"
									required
									value={formData.email}
									onChange={handleChange}
									placeholder="tu@email.com"
									className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-text placeholder:text-text-muted/50 outline-none transition-colors focus:border-secondary"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted"
								>
									Tu mensaje
								</label>

								<textarea
									id="message"
									name="message"
									required
									rows={4}
									value={formData.message}
									onChange={handleChange}
									placeholder="Cuéntame un poco sobre lo que tienes en mente..."
									className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-sm leading-6 text-text placeholder:text-text-muted/50 outline-none transition-colors focus:border-secondary"
								/>
							</div>
						</div>

						<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<p className="text- leading-4 text-text-muted">
								Al enviar el formulario se abrirá tu cliente de correo con el mensaje preparado.
							</p>

							<button
								type="submit"
								className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3.5 text-xs font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
							>
								Enviar mensaje
								<span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/15">
									<HiArrowUpRight
										size={14}
										className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
									/>
								</span>
							</button>
						</div>
					</form>
				</div>

				<div className="mt-20 border-t border-border pt-8 md:mt-28">
					<a href={`mailto:${EMAIL}`} className="group block overflow-hidden">
						<span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
							¿Prefieres escribir directamente?
						</span>

						<div className="mt-3 flex items-center justify-between gap-4">
							<span className="font-title text-xl font-light text-text transition-colors duration-300 group-hover:text-secondary md:text-3xl">
								{EMAIL}
							</span>

							<HiArrowUpRight
								size={22}
								className="shrink-0 text-secondary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
							/>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

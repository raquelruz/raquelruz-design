import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

import { useInView } from "../../hooks/useInView";

const EMAIL = "raquelruizlopezcepero@gmail.com";

const INITIAL_FORM = {
	name: "",
	email: "",
	message: "",
};

export const ContactForm = () => {
	const [form, setForm] = useState(INITIAL_FORM);

	const [formRef, isFormVisible] = useInView({
		threshold: 0.1,
	});

	let reveal = "translate-y-10 opacity-0";

	if (isFormVisible) {
		reveal = "translate-y-0 opacity-100";
	}

	const handleChange = (event) => {
		const { name, value } = event.target;

		setForm((currentForm) => ({
			...currentForm,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const subject = `Nuevo proyecto — ${form.name}`;

		const body = `
Hola Raquel,

Mi nombre es ${form.name}.

Mi email es: ${form.email}

Quería hablarte sobre:

${form.message}
        `.trim();

		const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailto;
	};

	return (
		<section ref={formRef} className="relative border-t border-border bg-background font-landing text-text">
			<div className="mx-auto max-w-325 px-6 py-20 md:px-10 md:py-28 lg:px-16">
				<div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-4">
						<div className={`transition-all duration-900 ${reveal}`}>
							<h2 className="mt-8 font-title text-5xl font-light leading-[0.9] tracking-[-0.05em] md:text-6xl">
								¿Tienes una idea?
							</h2>

							<p className="mt-7 text-sm leading-7 text-text-muted">
								No hace falta que tengas todo definido. Cuéntame qué tienes en mente y vemos juntos cómo
								darle forma.
							</p>
						</div>
					</div>

					<div className="lg:col-span-7 lg:col-start-6">
						<form
							onSubmit={handleSubmit}
							className={`transition-all delay-150 duration-1000 ${reveal}`}
						>
							<div className="grid gap-10 md:grid-cols-2">
								<div className="group">
									<label
										htmlFor="name"
										className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted"
									>
										Nombre
									</label>

									<input
										id="name"
										name="name"
										type="text"
										value={form.name}
										onChange={handleChange}
										required
										placeholder="Tu nombre"
										className="mt-3 w-full border-b border-border bg-transparent py-4 text-base outline-none placeholder:text-text-muted/50 transition-colors duration-300 focus:border-secondary"
									/>
								</div>

								<div className="group">
									<label
										htmlFor="email"
										className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted"
									>
										Email
									</label>

									<input
										id="email"
										name="email"
										type="email"
										value={form.email}
										onChange={handleChange}
										required
										placeholder="tu@email.com"
										className="mt-3 w-full border-b border-border bg-transparent py-4 text-base outline-none placeholder:text-text-muted/50 transition-colors duration-300 focus:border-secondary"
									/>
								</div>
							</div>

							<div className="mt-10">
								<label
									htmlFor="message"
									className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted"
								>
									Mensaje
								</label>

								<textarea
									id="message"
									name="message"
									value={form.message}
									onChange={handleChange}
									required
									rows={5}
									placeholder="Háblame un poco sobre tu proyecto..."
									className="mt-3 w-full resize-none border-b border-border bg-transparent py-4 text-base outline-none placeholder:text-text-muted/50 transition-colors duration-300 focus:border-secondary"
								/>
							</div>

							<div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
								<p className="text-xs leading-5 text-text-muted">
									Al enviar el formulario se abrirá tu cliente de correo para completar el mensaje.
								</p>

								<button
									type="submit"
									className="group inline-flex items-center justify-center gap-4 self-start rounded-full bg-text px-6 py-4 text-sm text-background transition-all duration-500 hover:-translate-y-1 hover:bg-secondary hover:shadow-[0_15px_40px_rgba(193,139,104,0.18)]"
								>
									<span>Enviar mensaje</span>

									<span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-text transition-all duration-500 group-hover:bg-white">
										<HiArrowUpRight
											size={14}
											className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
										/>
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

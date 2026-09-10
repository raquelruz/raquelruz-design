import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useInView } from "../../hooks/useInView";

const EMAIL = "raquelruizlopezcepero@gmail.com";

const SOCIAL_LINKS = [
	{
		label: "GitHub",
		href: "https://github.com/raquelruz",
		Icon: FaGithub,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/raquel-ruiz-lopez/",
		Icon: FaLinkedin,
	},
	{
		label: "Email",
		href: `mailto:${EMAIL}`,
		Icon: HiArrowUpRight,
	},
];

export const ContactInfo = () => {
	const [infoRef, isInfoVisible] = useInView({
		threshold: 0.15,
	});

	let reveal = "translate-y-8 opacity-0";

	if (isInfoVisible) {
		reveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={infoRef} className="relative border-t border-border bg-background font-landing text-text">
			<div className="relative mx-auto max-w-325 px-6 py-20 md:px-10 md:py-28 lg:px-16">
				<div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
					<div className={`lg:col-span-7 transition-all duration-900 ${reveal}`}>
						<p className="font-title text-3xl font-light leading-[1.08] tracking-[-0.035em] md:text-4xl lg:text-5xl">
							Si tienes una idea, un proyecto o simplemente quieres hablar de{" "}
							<span className="text-secondary">desarrollo web,</span> estoy al otro lado.
						</p>

						<p className="mt-8 ext-sm leading-7 text-text-muted md:text-base">
							Me interesa crear productos digitales que sean útiles, cuidados y fáciles de usar. Si crees
							que podemos hacer algo interesante juntos, escríbeme.
						</p>
					</div>

					<div className="lg:col-span-4 lg:col-start-9">
						<div className={`transition-all delay-200 duration-900 ${reveal}`}>
							<div className="flex items-center gap-3">
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-50" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
								</span>

								<span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text-muted">
									Disponible para nuevos proyectos
								</span>
							</div>

							<div className="mt-10 border-t border-border">
								{SOCIAL_LINKS.map((item) => {
									const Icon = item.Icon;

									return (
										<a
											key={item.label}
											href={item.href}
											target={item.label === "Email" ? undefined : "_blank"}
											rel={item.label === "Email" ? undefined : "noopener noreferrer"}
											className="group flex items-center justify-between border-b border-border py-5 transition-colors duration-300 hover:text-secondary"
										>
											<span className="flex items-center gap-4">
												<Icon size={16} strokeWidth={1.5} />

												<span className="text-sm">{item.label}</span>
											</span>

											<HiArrowUpRight
												size={15}
												className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
											/>
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

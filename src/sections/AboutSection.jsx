export const AboutSection = () => {
	return (
		<div className="">
			<div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
				<div className="shrink-0">
					<p className="font-title italic text-secondary text-6xl leading-none md:text-7xl">+3</p>
					<span className="mt-2 block text-lg text-text-muted">años</span>
				</div>

				<div>
					<h2 className="font-title text-text text-3xl leading-tight md:text-5xl">
						Developer, designer & problem solver.
					</h2>

					<div className="mt-6 mb-10 flex max-w-5xl flex-col gap-4 text-text-muted text-lg">
						<p>
							Mi experiencia en diseño digital me permite combinar desarrollo y diseño para construir
							productos donde la experiencia de usuario y la parte técnica trabajan juntas.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

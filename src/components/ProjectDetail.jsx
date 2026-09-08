import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../utils/projectsData";
import { ImageCarousel } from "./ImageCarousel";

export const ProjectDetail = () => {
	const { slug } = useParams();
	const project = PROJECTS.find((p) => p.slug === slug);
	const index = PROJECTS.findIndex((p) => p.slug === slug);

	if (!project) {
		return (
			<section className="mx-auto px-4 py-32 text-center font-landing">
				<h1 className="font-title text-text text-4xl md:text-6xl font-light">Proyecto no encontrado</h1>
				<p className="mt-4 text-text-muted">El proyecto que buscas no existe o ha cambiado de dirección.</p>
				<Link
					to="/projects"
					className="mt-8 inline-flex items-center gap-2 bg-secondary text-white rounded-full border border-text/20 px-6 py-3 text-sm font-medium transition-colors hover:border-text/40"
				>
					← Volver a proyectos
				</Link>
			</section>
		);
	}

	const {
		title,
		subtitle,
		year,
		type,
		description,
		objective,
		services = [],
		techStack = [],
		keyFeatures = [],
		role,
		result,
		externalLink,
		assets,
	} = project;

	return (
		<section className="font-landing text-text px-6 pt-8 pb-24 md:px-14 lg:px-20">
			<Link
				to="/projects"
				className="inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-secondary"
			>
				← Volver a proyectos
			</Link>

			<div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-16">
				<aside className="md:col-span-4 md:sticky md:top-28 md:self-start">
					<span className="font-title text-2xl italic text-secondary">
						{String(index + 1).padStart(2, "0")}
					</span>

					<h1 className="font-title text-text mt-3 text-4xl leading-[1.05] md:text-5xl">{title}</h1>

					<p className="mt-3 text-sm text-secondary">{subtitle?.toUpperCase()}</p>

					<p className="mt-6 text-text-muted leading-relaxed">{description}</p>

					<div className="mt-8 flex flex-col gap-4 border-t border-border pt-6">
						<div className="flex justify-between text-sm">
							<p className="text-text-muted">Año</p>
							<p className="text-text font-medium">{year}</p>
						</div>

						{role && (
							<div className="flex justify-between gap-6 text-sm">
								<p className="text-text-muted shrink-0">Rol</p>
								<p className="text-text font-medium text-right">{role}</p>
							</div>
						)}
						{type === "practice" && (
							<div className="flex justify-between text-sm">
								<dt className="text-text-muted">Tipo</dt>
								<dd className="text-text font-medium">Práctica</dd>
							</div>
						)}
					</div>

					{techStack.length > 0 && (
						<div className="mt-6 flex flex-wrap gap-2">
							{techStack.map((tech) => (
								<span
									key={tech}
									className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
								>
									{tech}
								</span>
							))}
						</div>
					)}

					{externalLink && (
						<a
							href={externalLink}
							target="_blank"
							rel="noreferrer"
							className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-medium text-background transition hover:bg-secondary"
						>
							Ver demo en vivo
							<span>↗</span>
						</a>
					)}
				</aside>

				<div className="md:col-span-8">
					{(assets?.gallery?.length > 0 || assets?.coverImage) && (
						<ImageCarousel
							images={assets?.gallery?.length > 0 ? assets.gallery : [assets.coverImage]}
							alt={`${title} screenshot`}
							className="aspect-4/5 md:aspect-3/4 w-full rounded-3xl"
						/>
					)}

					{objective && (
						<blockquote className="mt-14 border-l-2 border-secondary pl-6 md:pl-8">
							<span className="mt-3 block text-xs uppercase tracking-widest text-text-muted">
								Objetivo del proyecto
							</span>
							<p className="font-title text-2xl italic leading-snug text-text md:text-3xl">
								“{objective}”
							</p>
						</blockquote>
					)}

					{result && (
						<div className="mt-14 flex flex-col gap-2 border-y border-border py-8">
							<span className="text-xs uppercase tracking-widest text-secondary">Resultado</span>
							<p className="text-xl text-text leading-relaxed md:text-2xl">{result}</p>
						</div>
					)}

					{keyFeatures.length > 0 && (
						<div className="mt-14">
							<h2 className="font-title text-text text-2xl md:text-3xl">Funcionalidades</h2>
							<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
								{keyFeatures.map((feature, i) => (
									<div
										key={feature}
										className="group flex items-start gap-4 rounded-2xl border border-border p-5 transition hover:border-secondary/40 hover:bg-background-soft"
									>
										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-white">
											{String(i + 1).padStart(2, "0")}
										</span>
										<p className="text-text leading-relaxed pt-2">{feature}</p>
									</div>
								))}
							</div>
						</div>
					)}

					{services.length > 0 && (
						<div className="mt-14">
							<h2 className="font-title text-text text-2xl md:text-3xl">Servicios aplicados</h2>
							<div className="mt-6 flex flex-wrap gap-2">
								{services.map((service) => (
									<span
										key={service}
										className="rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary"
									>
										{service}
									</span>
								))}
							</div>
						</div>
					)}

					{/* Navegación al siguiente proyecto */}
					{PROJECTS[index + 1] && (
						<Link
							to={`/projects/${PROJECTS[index + 1].slug}`}
							className="group mt-20 flex items-center justify-between rounded-3xl border border-border px-8 py-8 transition hover:border-secondary/40"
						>
							<div>
								<span className="text-xs uppercase tracking-widest text-text-muted">
									Siguiente proyecto
								</span>
								<p className="font-title text-text mt-2 text-2xl md:text-3xl">
									{PROJECTS[index + 1].title}
								</p>
							</div>
							<span className="text-2xl text-secondary transition-transform group-hover:translate-x-2">
								→
							</span>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

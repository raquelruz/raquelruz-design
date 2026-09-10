import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

import { ProjectTags } from "./ProjectTags";

import { getTypeLabel } from "../../utils/projectHelpers";

export const ProjectPageCard = ({ project }) => {
    const hasExternalLink = Boolean(project.externalLink);
    const hasGithub = Boolean(project.github);
    const hasServices = project.services?.length > 0;
    const hasCoverImage = Boolean(project.assets?.coverImage);

    let projectStatus = "Proyecto privado";

    if (hasExternalLink) {
        projectStatus = "Ver proyecto";
    }

    return (
        <article className="group overflow-hidden border border-border bg-background-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(70,55,40,0.08)]">
            {/* IMAGE */}
            <div className="relative aspect-video overflow-hidden bg-secondary/10">
                {hasCoverImage && (
                    <img
                        src={project.assets.coverImage}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                        loading="lazy"
                    />
                )}

                {!hasCoverImage && (
                    <div className="flex h-full items-center justify-center">
                        <span className="font-title text-6xl font-light tracking-[-0.05em] text-text/10">
                            {project.title}
                        </span>
                    </div>
                )}

                {/* TYPE */}
                <div className="absolute left-5 top-5">
                    <span className="border border-white/30 bg-background/90 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-text shadow-sm backdrop-blur-md">
                        {getTypeLabel(project.type)}
                    </span>
                </div>

                {/* EXTERNAL LINK */}
                {hasExternalLink && (
                    <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center bg-background text-text opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                        aria-label={`Visitar ${project.title}`}
                    >
                        <HiArrowUpRight size={18} />
                    </a>
                )}
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">
                {/* META */}
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">
                            <span>{project.year}</span>

                            <span className="h-px w-5 bg-secondary/50" />

                            <span>{getTypeLabel(project.type)}</span>
                        </div>

                        <h3 className="mt-4 font-title text-4xl font-light leading-[0.95] tracking-[-0.05em] text-text md:text-5xl">
                            {project.title}
                            <span className="text-secondary">.</span>
                        </h3>

                        {project.subtitle && (
                            <p className="mt-3 text-[12px] italic leading-relaxed text-text-muted">
                                {project.subtitle}
                            </p>
                        )}
                    </div>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-6 text-[14px] leading-6 text-text-muted">
                    {project.description}
                </p>

                {/* SERVICES */}
                {hasServices && (
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                        {project.services.map((service) => (
                            <span
                                key={service}
                                className="text-[10px] font-medium uppercase tracking-[0.14em] text-text"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                )}

                {/* TAGS */}
                <div className="mt-7 border-t border-border pt-5">
                    <ProjectTags project={project} />
                </div>

                {/* FOOTER */}
                <div className="mt-7 flex items-center justify-between gap-6">
                    {hasExternalLink ? (
                        <a
                            href={project.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 border-b border-text/25 pb-1 text-[12px] font-medium uppercase tracking-[0.16em] text-text transition-colors duration-300 hover:border-secondary hover:text-secondary"
                        >
                            {projectStatus}

                            <HiArrowUpRight
                                size={14}
                                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            />
                        </a>
                    ) : (
                        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
                            {projectStatus}
                        </span>
                    )}

                    <div className="flex items-center gap-4">
                        {hasGithub && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`GitHub de ${project.title}`}
                                className="text-text-muted transition-all duration-300 hover:-translate-y-1 hover:text-text"
                            >
                                <FaGithub size={17} />
                            </a>
                        )}

                        {hasExternalLink && (
                            <a
                                href={project.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Abrir ${project.title}`}
                                className="text-text-muted transition-all duration-300 hover:-translate-y-1 hover:text-text"
                            >
                                <HiArrowUpRight size={18} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};
import { HiArrowUpRight } from "react-icons/hi2";
import { ProjectTags } from "./ProjectTags";
import { getTypeLabel } from "../../utils/projectHelpers";

export const FeaturedProject = ({ project }) => {
    const hasKeyFeatures = project.keyFeatures?.length > 0;
    const hasExternalLink = Boolean(project.externalLink);

    return (
        <article className="group overflow-hidden rounded-4xl border border-[#ded7ce] bg-[#fdfbf8]">
            <div className="relative overflow-hidden bg-[#e9e2d9]">
                <div className="aspect-video md:aspect-2/1">
                    <img
                        src={project.assets.coverImage}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                    />
                </div>


                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />
                <div className="absolute left-5 top-5 md:left-7 md:top-7">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/85 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#51483f] shadow-sm backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        Proyecto destacado
                    </span>
                </div>

                <div className="absolute bottom-5 right-5 md:bottom-7 md:right-7">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-white/80">
                        01
                    </span>
                </div>
            </div>

            <div className="p-7 md:p-10 lg:p-12">
                <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#94887c]">
                                {project.year}
                            </span>

                            <span className="h-px w-6 bg-[#d8d0c7]" />

                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#94887c]">
                                {getTypeLabel(project.type)}
                            </span>
                        </div>

                        <h2 className="mt-6 font-title text-6xl font-light leading-[0.85] tracking-[-0.045em] text-[#302b27] md:text-7xl">
                            {project.title}
                        </h2>

                        <p className="mt-5 font-title text-xl italic leading-snug text-[#8b7d70] md:text-2xl">
                            {project.subtitle}
                        </p>

                        <p className="mt-8 text-[14px] leading-7 text-[#716b64] md:text-[15px]">
                            {project.description}
                        </p>

                        {hasKeyFeatures && (
                            <div className="mt-10">
                                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#94887c]">
                                    Lo que he construido
                                </p>

                                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                                    {project.keyFeatures.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />

                                            <span className="text-[12px] leading-5 text-[#655d55]">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="border-t border-[#e7e0d8] pt-5">
                                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#94887c]">
                                    Mi rol
                                </p>

                                <p className="mt-2 text-[13px] text-[#514a43]">
                                    {project.role}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-[#e7e0d8] pt-5">
                                <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#94887c]">
                                    Tecnologías
                                </p>

                                <ProjectTags project={project} />
                            </div>
                        </div>

                        {hasExternalLink && (
                            <a
                                href={project.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link mt-10 flex h-14 items-center justify-between rounded-full bg-[#39332d] px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-secondary"
                            >
                                <span>Ver proyecto</span>

                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                    <HiArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                    />
                                </span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};
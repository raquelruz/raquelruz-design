import { HiArrowUpRight } from "react-icons/hi2";
import { useState } from "react";

import { getTypeLabel } from "../../utils/projectHelpers";

import { ProjectTags } from "./ProjectTags";
import { ImageCarousel } from "../ImageCarousel";

export const FeaturedProject = ({ project }) => {
    const [activeImage, setActiveImage] = useState(0);

    const hasKeyFeatures = project.keyFeatures?.length > 0;
    const hasExternalLink = Boolean(project.externalLink);
    const hasCoverImage = Boolean(project.assets?.coverImage);
    const hasGallery = project.assets?.gallery?.length > 0;

    let images = [];

    if (hasGallery) {
        images = project.assets.gallery;
    } else if (hasCoverImage) {
        images = [project.assets.coverImage];
    }

    const hasImages = images.length > 0;
    const hasMultipleImages = images.length > 1;

    return (
        <article className="group overflow-hidden border border-border bg-background-soft">
            {hasImages && (
                <div className="relative overflow-hidden bg-secondary/10">
                    <ImageCarousel
                        images={images}
                        alt={`${project.title} preview`}
                        onSlideChange={setActiveImage}
                        className="w-full"
                    />

                    <div className="absolute left-5 top-5 z-10 md:left-7 md:top-7">
                        <span className="inline-flex items-center gap-2 border border-white/30 bg-background/90 px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.18em] text-text shadow-sm backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            Proyecto destacado
                        </span>
                    </div>

                    {hasMultipleImages && (
                        <div className="absolute bottom-5 right-5 z-10 md:bottom-7 md:right-7">
                            <span className="font-mono text-[9px] tracking-[0.16em] text-white/80">
                                {String(activeImage + 1).padStart(2, "0")}
                                {" / "}
                                {String(images.length).padStart(2, "0")}
                            </span>
                        </div>
                    )}
                </div>
            )}

            <div className="p-7 md:p-10 lg:p-12">
                <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">
                                {project.year}
                            </span>

                            <span className="h-px w-6 bg-secondary/50" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">
                                {getTypeLabel(project.type)}
                            </span>
                        </div>

                        <h2 className="mt-6 font-title text-6xl font-light leading-[0.85] tracking-[-0.055em] text-text md:text-7xl lg:text-8xl">
                            {project.title}
                            <span className="text-secondary">.</span>
                        </h2>

                        {project.subtitle && (
                            <p className="mt-5 font-title text-xl italic leading-snug text-text-muted md:text-2xl">
                                {project.subtitle}
                            </p>
                        )}

                        <p className="mt-8 text-[14px] leading-7 text-text-muted md:text-[15px]">
                            {project.description}
                        </p>

                        {hasKeyFeatures && (
                            <div className="mt-10">
                                <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">
                                    Lo que he construido
                                </p>

                                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                                    {project.keyFeatures.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />

                                            <span className="text-[12px] leading-5 text-text-muted">
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
                            {project.role && (
                                <div className="border-t border-border pt-5">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">
                                        Mi rol
                                    </p>

                                    <p className="mt-2 text-[13px] leading-5 text-text">
                                        {project.role}
                                    </p>
                                </div>
                            )}

                            <div className="mt-8 border-t border-border pt-5">
                                <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">
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
                                className="group/link mt-10 inline-flex h-14 items-center justify-between border border-text bg-text px-6 text-[10px] font-medium uppercase tracking-[0.18em] text-background transition-colors duration-300 hover:border-secondary hover:bg-secondary"
                            >
                                <span>Ver proyecto</span>

                                <span className="flex h-8 w-8 items-center justify-center border border-background/20">
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
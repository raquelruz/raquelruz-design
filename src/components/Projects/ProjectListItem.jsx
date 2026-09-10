import { useState } from "react";
import { Link } from "react-router-dom";

import { HiArrowUpRight, HiArrowRight, HiArrowLeft } from "react-icons/hi2";

import { ProjectTags } from "./ProjectTags";

import { getTypeLabel } from "../../utils/projectHelpers";

export const ProjectListItem = ({ project, index = 0 }) => {
	const { title, subtitle, year, type, description, externalLink, slug, assets } = project;

	const [activeImage, setActiveImage] = useState(0);

	const isReversed = index % 2 === 1;

	const hasCaseStudy = Boolean(slug);
	const hasExternalLink = Boolean(externalLink);
	const hasCoverImage = Boolean(assets?.coverImage);
	const hasGallery = assets?.gallery?.length > 0;
	const hasSubtitle = Boolean(subtitle);

	const projectNumber = String(index + 1).padStart(2, "0");

	let contentClass = "md:col-span-4";

	if (!hasCoverImage && !hasGallery) {
		contentClass = "md:col-span-10";
	}

	let galleryImages = [];

	if (hasGallery) {
		galleryImages = assets.gallery;
	} else if (hasCoverImage) {
		galleryImages = [assets.coverImage];
	}

	const hasMultipleImages = galleryImages.length > 1;
	const currentImage = galleryImages[activeImage];

	const goToNextImage = () => {
		if (!hasMultipleImages) {
			return;
		}

		if (activeImage === galleryImages.length - 1) {
			setActiveImage(0);
			return;
		}

		setActiveImage(activeImage + 1);
	};

	const goToPreviousImage = () => {
		if (!hasMultipleImages) {
			return;
		}

		if (activeImage === 0) {
			setActiveImage(galleryImages.length - 1);
			return;
		}

		setActiveImage(activeImage - 1);
	};

	return (
		<article className="group border-t border-border py-16 md:py-24">
			<div
				className={`grid gap-10 md:grid-cols-12 md:items-center md:gap-8 ${isReversed ? "md:text-right" : ""}`}
			>
				<div
					className={`hidden md:col-span-1 md:flex md:self-start ${
						isReversed ? "md:order-3 md:justify-end" : "md:order-1"
					}`}
				>
					<span className="font-title text-4xl font-light tracking-[-0.05em] text-secondary">
						{projectNumber}
					</span>
				</div>

				{galleryImages.length > 0 && (
					<div className={`md:col-span-7 ${isReversed ? "md:order-2" : "md:order-2"}`}>
						<div>
							<Link
								to={hasCaseStudy ? `/projects/${slug}` : "#"}
								className="group/image relative block overflow-hidden bg-secondary/5"
							>
								<div className="aspect-4/3 overflow-hidden md:aspect-[1.2/1]">
									<img
										key={currentImage}
										src={currentImage}
										alt={`${title} preview`}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.025]"
										loading="lazy"
									/>
								</div>

								<div className="absolute inset-0 bg-text/0 transition-colors duration-500 group-hover/image:bg-text/5" />

								<div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center bg-background text-text opacity-0 transition-all duration-500 group-hover/image:translate-y-0 group-hover/image:opacity-100">
									<HiArrowUpRight size={18} />
								</div>
							</Link>

							{hasMultipleImages && (
								<div className="mt-5 flex items-center justify-between">
									<div className="flex flex-1 items-center gap-3">
										<span className="text-[9px] font-medium tracking-[0.18em] text-text">
											{String(activeImage + 1).padStart(2, "0")}
										</span>

										<div className="relative h-px flex-1 max-w-45 overflow-hidden bg-border">
											<div
												className="absolute left-0 top-0 h-full bg-text transition-all duration-500"
												style={{
													width: `${((activeImage + 1) / galleryImages.length) * 100}%`,
												}}
											/>
										</div>

										<span className="text-[9px] font-medium tracking-[0.18em] text-text-muted">
											{String(galleryImages.length).padStart(2, "0")}
										</span>
									</div>

									<div className="flex items-center gap-4">
										<button
											type="button"
											onClick={goToPreviousImage}
											aria-label="Imagen anterior"
											className="group/arrow text-text-muted transition-colors duration-300 hover:text-text"
										>
											<HiArrowLeft
												size={19}
												className="transition-transform duration-300 group-hover/arrow:-translate-x-1"
											/>
										</button>

										<button
											type="button"
											onClick={goToNextImage}
											aria-label="Siguiente imagen"
											className="group/arrow text-text-muted transition-colors duration-300 hover:text-text"
										>
											<HiArrowRight
												size={19}
												className="transition-transform duration-300 group-hover/arrow:translate-x-1"
											/>
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				)}

				<div
					className={`flex flex-col justify-center ${contentClass} ${
						isReversed ? "md:order-1 md:items-end" : "md:order-3 md:items-start"
					}`}
				>
					<span className="mb-6 font-title text-3xl font-light tracking-[-0.05em] text-text/20 md:hidden">
						{projectNumber}
					</span>

					<div
						className={`flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-text-muted ${
							isReversed ? "md:flex-row-reverse" : ""
						}`}
					>
						<span>{year}</span>

						<span className="h-px w-6 bg-secondary/50" />

						<span>{getTypeLabel(type)}</span>
					</div>

					<h3 className="mt-5 font-title text-5xl font-light leading-[0.9] tracking-[-0.055em] text-text md:text-6xl lg:text-7xl">
						{title}
						<span className="text-secondary">.</span>
					</h3>

					{hasSubtitle && <p className="mt-4 text-sm italic leading-relaxed text-text-muted">{subtitle}</p>}

					<p className="mt-6 text-md leading-7 text-text-muted">{description}</p>

					<div className="mt-7">
						<ProjectTags project={project} />
					</div>

					<div
						className={`mt-9 flex flex-wrap items-center gap-6 ${isReversed ? "md:flex-row-reverse" : ""}`}
					>
						{hasCaseStudy && (
							<Link
								to={`/projects/${slug}`}
								className="group/cta inline-flex items-center gap-2 border-b border-text/25 pb-1 text-[14px] font-medium uppercase tracking-[0.18em] text-text transition-colors hover:border-secondary hover:text-secondary"
							>
								Ver case study
								<HiArrowRight
									size={14}
									className="transition-transform duration-300 group-hover/cta:translate-x-1"
								/>
							</Link>
						)}

						{hasExternalLink && (
							<a
								href={externalLink}
								target="_blank"
								rel="noreferrer"
								className="group/demo inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-text"
							>
								Demo
								<HiArrowUpRight
									size={13}
									className="transition-transform duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
								/>
							</a>
						)}
					</div>
				</div>
			</div>
		</article>
	);
};

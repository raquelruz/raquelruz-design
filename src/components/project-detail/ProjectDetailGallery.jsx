import { ImageCarousel } from "../ImageCarousel";
import { useInView } from "../../hooks/useInView";

export const ProjectDetailGallery = ({ project }) => {
	const { title, assets } = project;

	let images = [];

	if (assets?.gallery?.length > 0) {
		images = assets.gallery;
	} else if (assets?.coverImage) {
		images = [assets.coverImage];
	}

	if (images.length === 0) {
		return null;
	}

	const [galleryRef, isGalleryVisible] = useInView({
		threshold: 0.15,
	});

	let galleryReveal = "translate-y-16 opacity-0";
	let imageScale = "scale-[1.04]";
	let labelReveal = "translate-y-4 opacity-0";

	if (isGalleryVisible) {
		galleryReveal = "translate-y-0 opacity-100";
		imageScale = "scale-100";
		labelReveal = "translate-y-0 opacity-100";
	}

	return (
		<section ref={galleryRef} className="relative px-4 pb-10 pt-20 md:px-8 md:pb-16">
			<div className="mx-auto max-w-375">
				<div className="relative">
					<div
						className={`relative overflow-hidden rounded-[28px] bg-[#e9e2da] transition-all duration-1100 ease-[cubic-bezier(0.77,0,0.18,1)] md:rounded-[40px] ${galleryReveal}`}
					>
						<div className="absolute left-5 top-5 z-20 flex items-center gap-3 rounded-full border border-white/20 bg-[#f7f5f1]/85 px-4 py-2.5 shadow-sm backdrop-blur-md md:left-7 md:top-7">
							<span className="relative flex h-1.5 w-1.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-50" />
								<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
							</span>

							<span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#625b54]">
								Preview
							</span>
						</div>

						<div className={`transition-transform duration-1400 ease-out ${imageScale}`}>
							<ImageCarousel
								images={images}
								alt={`${title} preview`}
								className="aspect-4/3 w-full md:aspect-video"
							/>
						</div>

						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/10 to-transparent" />

						<div className="absolute bottom-5 right-5 z-20 rounded-full bg-[#292725]/80 px-4 py-2 font-mono text-[9px] tracking-[0.15em] text-white/80 backdrop-blur-md md:bottom-7 md:right-7">
							{String(images.length).padStart(2, "0")} / 01
						</div>
					</div>

					<div
						className={`mt-5 flex items-start justify-between gap-8 px-1 transition-all delay-300 duration-700 ${labelReveal}`}
					>
						<p className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#918981] sm:block">
							Una selección visual del proyecto y su proceso de desarrollo.
						</p>

						<span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#918981] sm:block">
							Haz scroll para explorar
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

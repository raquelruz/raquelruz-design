import { useEffect, useState } from "react";

export const ImageCarousel = ({ images = [], alt = "", interval = 4000, className = "" }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (images.length <= 1) return;

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReducedMotion) return;

		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % images.length);
		}, interval);

		return () => clearInterval(timer);
	}, [images.length, interval]);

	if (images.length === 0) return null;

	return (
		<div className={`relative overflow-hidden bg-background-soft ${className}`}>
			{images.map((image, i) => (
				<img
					key={image}
					src={image}
					alt={`${alt} ${i + 1}`}
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
						i === activeIndex ? "opacity-100" : "opacity-0"
					}`}
				/>
			))}

			{/* Imagen invisible para mantener el alto del contenedor */}
			<img src={images[0]} alt="" className="invisible h-full w-full object-cover" aria-hidden="true" />

			{images.length > 1 && (
				<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
					{images.map((image, i) => (
						<button
							key={image}
							onClick={() => setActiveIndex(i)}
							aria-label={`Ver imagen ${i + 1}`}
							className={`h-1.5 rounded-full transition-all ${
								i === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
							}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};
import { useEffect, useState } from "react";

export const ImageCarousel = ({
    images = [],
    alt = "",
    interval = 4000,
    className = "",
    onSlideChange,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const hasMultipleImages = images.length > 1;

    useEffect(() => {
        if (images.length === 0) {
            return;
        }

        if (activeIndex >= images.length) {
            setActiveIndex(0);
        }
    }, [images.length, activeIndex]);

    useEffect(() => {
        if (!hasMultipleImages) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            return;
        }

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval, hasMultipleImages]);

    useEffect(() => {
        if (onSlideChange) {
            onSlideChange(activeIndex);
        }
    }, [activeIndex, onSlideChange]);

    if (images.length === 0) {
        return null;
    }

    const handleSelectImage = (index) => {
        setActiveIndex(index);
    };

    return (
        <div
            className={`relative aspect-4/3 overflow-hidden bg-background-soft md:aspect-video ${className}`}
        >
            {images.map((image, index) => {
                let imageOpacity = "opacity-0";

                if (index === activeIndex) {
                    imageOpacity = "opacity-100";
                }

                return (
                    <img
                        key={image}
                        src={image}
                        alt={`${alt} ${index + 1}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${imageOpacity}`}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                );
            })}

            {hasMultipleImages && (
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/35 px-4 py-2.5 shadow-sm backdrop-blur-md">
                    {images.map((image, index) => {
                        let indicatorClass =
                            "h-2 w-2 bg-white/55 hover:bg-white/80";

                        if (index === activeIndex) {
                            indicatorClass = "h-2 w-8 bg-white";
                        }

                        return (
                            <button
                                key={image}
                                type="button"
                                onClick={() => handleSelectImage(index)}
                                aria-label={`Ver imagen ${index + 1}`}
                                aria-current={
                                    index === activeIndex ? "true" : undefined
                                }
                                className={`rounded-full transition-all duration-500 ${indicatorClass}`}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};
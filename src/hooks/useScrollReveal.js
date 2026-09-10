import { useEffect, useRef } from "react";

export const useScrollReveal = (dependencies = []) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const container = sectionRef.current;

        if (!container) {
            return;
        }

        const elements = container.querySelectorAll("[data-reveal]");

        if (!elements.length) {
            return;
        }

        elements.forEach((element) => {
            element.classList.remove("is-visible");
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, dependencies);

    return sectionRef;
};
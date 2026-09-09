import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
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
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return sectionRef;
};
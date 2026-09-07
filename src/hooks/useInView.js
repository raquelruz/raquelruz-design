import { useEffect, useRef, useState } from "react";

export const useInView = (options = { threshold: 0.2 }) => {
	const ref = useRef(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReducedMotion) {
			setIsInView(true);
			return;
		}

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsInView(true);
				observer.disconnect();
			}
		}, options);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return [ref, isInView];
};

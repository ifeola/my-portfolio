import { useEffect } from "react";

/**
 * Adds `.is-visible` to `[data-reveal]` elements as they enter the viewport.
 * Elements already on screen are revealed on the next frame so the hero
 * animates in without waiting for a scroll.
 */
export function useReveal() {
	useEffect(() => {
		const elements = Array.from(
			document.querySelectorAll<HTMLElement>("[data-reveal]"),
		);

		if (!elements.length) return;

		const reducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		if (reducedMotion || typeof IntersectionObserver === "undefined") {
			elements.forEach((element) => element.classList.add("is-visible"));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0, rootMargin: "0px 0px -8% 0px" },
		);

		for (const element of elements) {
			const isOnScreen = element.getBoundingClientRect().top < window.innerHeight * 0.92;

			if (isOnScreen) {
				requestAnimationFrame(() => element.classList.add("is-visible"));
			} else {
				observer.observe(element);
			}
		}

		return () => observer.disconnect();
	}, []);
}
